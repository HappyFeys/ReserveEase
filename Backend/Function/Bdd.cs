using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Firstname = "adem", Lastname = "Een", Password = BCrypt.Net.BCrypt.HashPassword("admin123"), Email = "admin@example.com", Birthday = new DateTime(1999, 6, 2), Digicode = "0000", Picture = "", Phonenumber = "+32492201522", Role = 1 }
        );
    }
}

public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = "";
    public string Firstname { get; set; } = "";
    public string Lastname { get; set; } = "";
    public string Phonenumber { get; set; } = "";
    public DateTime Birthday { get; set; }
    public string Password { get; set; } = "";
    public string Picture { get; set; } = "";
    public string Digicode { get; set; } = "";
    public int Role { get; set; }
    public List<Filter> Filterhistory { get; set; } = new List<Filter>();
}

public enum Filter { beach }