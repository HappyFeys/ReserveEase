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

        var digicodeClaim = User.Claims.FirstOrDefault(c => c.Type == "DigicodeVerified");
        if (digicodeClaim == null || digicodeClaim.Value != "true")
        {
            return Unauthorized(new { message = "digicode not verified", error = 3 });
        }

        var logements = LogementService.GetAllLogements(_context);
        var recommendedLogements = LogementService.GetLastFiveLogements(_context);

        return Ok(new
        {
            message = "Send home",
            error = 0,
            Filter = Filters.GetAllFilters(),
            LogementRecomanded = recommendedLogements,
            LogementList = logements
        });
    }
}
