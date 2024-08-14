using System;
using System.Collections.Generic;
using System.Linq;

public static class Filters
{
    public static List<string> Localisation = new List<string>()
    {
        "Ville",
        "Quartier",
        "Région",
        "Pays",
        "Plages",
        "Musées",
        "Restaurants",
        "Stations de métro",
        "Bus",
        "Gares"
    };

    public static List<string> TypeHebergement = new List<string>()
    {
        "Appartement",
        "Maison",
        "Chambre d’hôtel",
        "Bungalow",
        "Villa",
        "Cabane",
        "Studio",
        "Maison de vacances",
        "Chambre d’hôte"
    };

    public static List<string> Equipements = new List<string>()
    {
        "Wi-Fi",
        "Climatisation",
        "Chauffage",
        "Cuisine équipée",
        "Lave-linge",
        "Sèche-linge",
        "Télévision",
        "Parking",
        "Piscine",
        "Jacuzzi",
        "BBQ",
        "Balcon/Terrasse",
        "Jardin",
        "Ascenseur"
    };

    public static List<string> Accessibilite = new List<string>()
    {
        "Accès aux personnes handicapées",
        "Équipements pour bébés"
    };

    public static List<string> TypeSejour = new List<string>()
    {
        "Séjour longue durée",
        "Séjour de courte durée",
        "Séjour pour les groupes",
        "Séjour romantique",
        "Séjour en famille"
    };

    public static List<string> ServicesSupplementaires = new List<string>()
    {
        "Petit-déjeuner inclus",
        "Service de ménage",
        "Transfert aéroport",
        "Service de conciergerie",
        "Animaux acceptés",
        "Fumeur/non-fumeur"
    };

    public static List<string> ConfortEtStyle = new List<string>()
    {
        "Luxe",
        "Budget",
        "Moderne",
        "Classique",
        "Rustique",
        "Éco-responsable"
    };

    public static List<string> Autres = new List<string>()
    {
        "Politique d'annulation",
        "Offres spéciales"
    };

    public static Dictionary<string, List<string>> GetAllFilters()
    {
        return new Dictionary<string, List<string>>
        {
            { "localisation", Localisation },
            { "typeHebergement", TypeHebergement },
            { "equipements", Equipements },
            { "accessibilite", Accessibilite },
            { "typeSejour", TypeSejour },
            { "servicesSupplementaires", ServicesSupplementaires },
            { "confortEtStyle", ConfortEtStyle },
            { "autres", Autres }
        };
    }
}
