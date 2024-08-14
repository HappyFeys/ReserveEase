using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UsersController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("home")]
    public async Task<IActionResult> GetHome()
    {
        if (User.Identity == null || !User.Identity.IsAuthenticated)
        {
            return Unauthorized(new { message = "Not logged in", error = 1 });
        }

        var emailClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
        if (emailClaim == null)
        {
            return Unauthorized(new { message = "Invalid user", error = 2 });
        }

        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == emailClaim.Value);
        if (user == null || user.Role == -1)
        {
            return Unauthorized(new { message = "Invalid role", error = 3 });
        }

        return Ok(new { message = "Send homepage", error = 0 });
    }
}
