using Microsoft.EntityFrameworkCore;

public static class LogementService
{
    public static List<Details> GetLastFiveLogements(ApplicationDbContext _context)
    {
        var logements = _context.Logements
            .Include(l => l.Proprietaire)
            .Include(l => l.Visiteurs)
            .Include(l => l.Disponibilites)
            .OrderByDescending(l => l.Id)
            .Take(5)
            .ToList();

        var details = logements.Select(l => new Details
        {
            Id = l.Id.ToString(),
            ImageName = l.ImageName,
            Ville = l.Ville,
            Pays = l.Pays,
            Prix = l.PrixParAdulte,
            Rating = l.Rating,
            Description = l.Description,
            DescriptionLongue = l.DescriptionLongue,
            Chambres = l.Chambres,
            Options = l.Options,
            Voyageurs = l.Voyageurs,
            Propriétaire = new Proprietaire { Name = l.Proprietaire.Firstname + " " + l.Proprietaire.Lastname, ImageName = l.Proprietaire.Picture },
            Galerie = l.Galerie
        }).ToList();

        return details;
    }

    public static List<Details> GetAllLogements(ApplicationDbContext _context)
    {
        var logements = _context.Logements
            .Include(l => l.Proprietaire)
            .Include(l => l.Visiteurs)
            .Include(l => l.Disponibilites)
            .ToList();

        var details = logements.Select(l => new Details
        {
            Id = l.Id.ToString(),
            ImageName = l.ImageName,
            Ville = l.Ville,
            Pays = l.Pays,
            Prix = l.PrixParAdulte,
            Rating = l.Rating,
            Description = l.Description,
            DescriptionLongue = l.DescriptionLongue,
            Chambres = l.Chambres,
            Options = l.Options,
            Voyageurs = l.Voyageurs,
            Propriétaire = new Proprietaire { Name = l.Proprietaire.Firstname + " " + l.Proprietaire.Lastname, ImageName = l.Proprietaire.Picture },
            Galerie = l.Galerie
        }).ToList();

        return details;
    }
}