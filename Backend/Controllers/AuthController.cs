using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AuthController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        if (User.Identity != null && User.Identity.IsAuthenticated)
        {
            return BadRequest(new { message = "Already logged in" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
        if (user != null && BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

            return Ok(new { message = "Login successful" });
        }

        return Unauthorized(new { message = "Invalid credentials" });
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
        if (User.Identity == null || !User.Identity.IsAuthenticated)
        {
            return BadRequest(new { message = "Not logged in" });
        }

        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Ok(new { message = "Logout successful" });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        if (await _context.Users.AnyAsync(u => u.Email == model.Email))
        {
            return BadRequest(new { message = "Email already in use" });
        }

        Random rand = new Random();
        string digicode = MathF.Floor((float)rand.NextDouble() * 9.99f)
             + "" + MathF.Floor((float)rand.NextDouble() * 9.99f)
             + "" + MathF.Floor((float)rand.NextDouble() * 9.99f)
             + "" + MathF.Floor((float)rand.NextDouble() * 9.99f);

        var user = new User
        {
            Email = model.Email,
            Firstname = model.Firstname,
            Lastname = model.Lastname,
            Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
            Phonenumber = model.Phonenumber,

            Digicode = digicode,
            Birthday = new DateTime(1999, 1, 1),
            Role = -1,
            Picture = ""
        };

        // Mail.Send(new SendTo(user.Firstname, user.Email), "test", user.Digicode);

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Registration successful" });
    }

    [HttpPost("verify-digicode")]
    public async Task<IActionResult> VerifyDigicode([FromBody] VerifyDigicodeModel model)
    {
        if (User.Identity == null || !User.Identity.IsAuthenticated)
        {
            return Unauthorized(new { message = "Not logged in" });
        }

        var emailClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
        if (emailClaim == null)
        {
            return Unauthorized(new { message = "Invalid user" });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == emailClaim.Value);
        if (user == null || user.Role != -1)
        {
            return Unauthorized(new { message = "Invalid user or role" });
        }

        if (user.Digicode != model.Digicode)
        {
            return BadRequest(new { message = "Invalid digicode" });
        }

        user.Role = 0;
        _context.Users.Update(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Role updated successfully" });
    }
}

public class LoginModel
{
    public string Email { get; set; } = "";
    public string Password { get; set; } = "";
}

public class RegisterModel
{
    public string Email { get; set; } = "";
    public string Firstname { get; set; } = "";
    public string Lastname { get; set; } = "";
    public string Password { get; set; } = "";
    public string Phonenumber { get; set; } = "";
}

public class VerifyDigicodeModel
{
    public string Digicode { get; set; } = "";
}