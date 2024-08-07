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

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == model.Username && u.Password == model.Password);
        if (user != null)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email)
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
}

public class LoginModel
{
    public string? Username { get; set; }
    public string? Password { get; set; }
}