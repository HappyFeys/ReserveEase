using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Logement> Logements { get; set; }
    public DbSet<Disponibilite> Disponibilites { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Firstname = "adem", Lastname = "Een", Password = BCrypt.Net.BCrypt.HashPassword("admin123"), Email = "admin@example.com", Birthday = new DateTime(1999, 6, 2), Digicode = "0000", Picture = "", Phonenumber = "+32492201522", Role = 1 }
        );

        modelBuilder.Entity<Logement>()
            .HasOne(l => l.Proprietaire)
            .WithMany()
            .HasForeignKey(l => l.ProprietaireId);

        modelBuilder.Entity<Disponibilite>()
            .HasOne(d => d.Logement)
            .WithMany(l => l.Disponibilites)
            .HasForeignKey(d => d.LogementId);

        modelBuilder.Entity<Logement>().HasData(
            new Logement { Id = 1, ImageName = "paris.jpg", Ville = "Paris", Pays = "France", PrixParAdulte = 120, PrixParEnfant = 60, Rating = 4.7, Description = "Charmant loft au cœur de Paris, à proximité de la Tour Eiffel.", DescriptionLongue = "Magnifique loft situé au cœur de Paris, à deux pas de la Tour Eiffel. Ce lieu unique allie charme parisien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Paris, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce loft est une véritable perle rare pour vivre pleinement l’expérience parisienne.", Chambres = 2, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 4, ProprietaireId = 1, Galerie = new List<string> { "ny.jpg", "tokyo.png", "paris.jpg" }, AdresseComplete = "123 Rue de Paris, 75001 Paris, France" },
            new Logement { Id = 2, ImageName = "london.jpg", Ville = "Londres", Pays = "Royaume-Uni", PrixParAdulte = 150, PrixParEnfant = 75, Rating = 4.8, Description = "Appartement moderne à Londres, proche de la Tamise.", DescriptionLongue = "Appartement moderne situé à Londres, à proximité de la Tamise. Ce lieu unique allie charme londonien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Londres, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience londonienne.", Chambres = 3, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 5, ProprietaireId = 1, Galerie = new List<string> { "london1.jpg", "london2.png", "london3.jpg" }, AdresseComplete = "456 Rue de Londres, SW1A 1AA Londres, Royaume-Uni" },
            new Logement { Id = 3, ImageName = "newyork.jpg", Ville = "New York", Pays = "États-Unis", PrixParAdulte = 200, PrixParEnfant = 100, Rating = 4.9, Description = "Penthouse luxueux à New York, vue sur Central Park.", DescriptionLongue = "Penthouse luxueux situé à New York, avec vue sur Central Park. Ce lieu unique allie charme new-yorkais et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de New York, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce penthouse est une véritable perle rare pour vivre pleinement l’expérience new-yorkaise.", Chambres = 4, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 6, ProprietaireId = 1, Galerie = new List<string> { "ny1.jpg", "ny2.png", "ny3.jpg" }, AdresseComplete = "789 Rue de New York, NY 10001 New York, États-Unis" },
            new Logement { Id = 4, ImageName = "tokyo.jpg", Ville = "Tokyo", Pays = "Japon", PrixParAdulte = 180, PrixParEnfant = 90, Rating = 4.6, Description = "Appartement traditionnel à Tokyo, proche du quartier Shibuya.", DescriptionLongue = "Appartement traditionnel situé à Tokyo, à proximité du quartier Shibuya. Ce lieu unique allie charme tokyoïte et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Tokyo, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience tokyoïte.", Chambres = 2, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 4, ProprietaireId = 1, Galerie = new List<string> { "tokyo1.jpg", "tokyo2.png", "tokyo3.jpg" }, AdresseComplete = "123 Rue de Tokyo, 150-0001 Tokyo, Japon" },
            new Logement { Id = 5, ImageName = "barcelona.jpg", Ville = "Barcelone", Pays = "Espagne", PrixParAdulte = 130, PrixParEnfant = 65, Rating = 4.6, Description = "Appartement moderne à Barcelone, proche de la Sagrada Família.", DescriptionLongue = "Appartement moderne situé à Barcelone, à proximité de la Sagrada Família. Ce lieu unique allie charme barcelonais et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Barcelone, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience barcelonaise.", Chambres = 3, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 5, ProprietaireId = 1, Galerie = new List<string> { "barcelona1.jpg", "barcelona2.png", "barcelona3.jpg" }, AdresseComplete = "123 Rue de Barcelone, 08001 Barcelone, Espagne" },
            new Logement { Id = 6, ImageName = "rome.jpg", Ville = "Rome", Pays = "Italie", PrixParAdulte = 140, PrixParEnfant = 70, Rating = 4.7, Description = "Appartement historique à Rome, proche du Colisée.", DescriptionLongue = "Appartement historique situé à Rome, à proximité du Colisée. Ce lieu unique allie charme romain et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Rome, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience romaine.", Chambres = 2, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 4, ProprietaireId = 1, Galerie = new List<string> { "rome1.jpg", "rome2.png", "rome3.jpg" }, AdresseComplete = "456 Rue de Rome, 00184 Rome, Italie" },
            new Logement { Id = 7, ImageName = "berlin.jpg", Ville = "Berlin", Pays = "Allemagne", PrixParAdulte = 110, PrixParEnfant = 55, Rating = 4.5, Description = "Appartement moderne à Berlin, proche de la Porte de Brandebourg.", DescriptionLongue = "Appartement moderne situé à Berlin, à proximité de la Porte de Brandebourg. Ce lieu unique allie charme berlinois et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Berlin, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience berlinoise.", Chambres = 3, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 5, ProprietaireId = 1, Galerie = new List<string> { "berlin1.jpg", "berlin2.png", "berlin3.jpg" }, AdresseComplete = "789 Rue de Berlin, 10117 Berlin, Allemagne" },
            new Logement { Id = 8, ImageName = "amsterdam.jpg", Ville = "Amsterdam", Pays = "Pays-Bas", PrixParAdulte = 125, PrixParEnfant = 62, Rating = 4.6, Description = "Appartement charmant à Amsterdam, proche des canaux.", DescriptionLongue = "Appartement charmant situé à Amsterdam, à proximité des canaux. Ce lieu unique allie charme amstellodamois et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits d'Amsterdam, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience amstellodamoise.", Chambres = 2, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 4, ProprietaireId = 1, Galerie = new List<string> { "amsterdam1.jpg", "amsterdam2.png", "amsterdam3.jpg" }, AdresseComplete = "123 Rue d'Amsterdam, 1012 Amsterdam, Pays-Bas" },
            new Logement { Id = 9, ImageName = "vienna.jpg", Ville = "Vienne", Pays = "Autriche", PrixParAdulte = 135, PrixParEnfant = 67, Rating = 4.7, Description = "Appartement élégant à Vienne, proche du Palais de Schönbrunn.", DescriptionLongue = "Appartement élégant situé à Vienne, à proximité du Palais de Schönbrunn. Ce lieu unique allie charme viennois et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Vienne, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience viennoise.", Chambres = 3, Options = new List<string> { "Ville", "Musées", "Restaurants", "Stations de métro", "Appartement", "Wi-Fi", "Climatisation", "Cuisine équipée", "Balcon/Terrasse", "Accès aux personnes handicapées", "Séjour longue durée", "Séjour romantique", "Petit-déjeuner inclus", "Service de ménage", "Luxe", "Moderne", "Politique d'annulation" }, Voyageurs = 5, ProprietaireId = 1, Galerie = new List<string> { "vienna1.jpg", "vienna2.png", "vienna3.jpg" }, AdresseComplete = "456 Rue de Vienne, 1010 Vienne, Autriche" }
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
    public List<string> Filterhistory { get; set; } = new List<string>();
}

public class Logement
{
    public int Id { get; set; }
    public string ImageName { get; set; }
    public string Ville { get; set; }
    public string Pays { get; set; }
    public decimal PrixParAdulte { get; set; }
    public decimal PrixParEnfant { get; set; }
    public double Rating { get; set; }
    public string Description { get; set; }
    public string DescriptionLongue { get; set; }
    public int Chambres { get; set; }
    public List<string> Options { get; set; }
    public int Voyageurs { get; set; }
    public User Proprietaire { get; set; }
    public int ProprietaireId { get; set; }
    public List<User> Visiteurs { get; set; }
    public List<string> Galerie { get; set; }
    public string AdresseComplete { get; set; }
    public List<Disponibilite> Disponibilites { get; set; }
}

public class Disponibilite
{
    public int Id { get; set; }
    public DateTime DateDebut { get; set; }
    public DateTime DateFin { get; set; }
    public int LogementId { get; set; }
    public Logement Logement { get; set; }
}