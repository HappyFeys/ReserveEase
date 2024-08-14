public class Proprietaire
{
    public string Name { get; set; }
    public string ImageName { get; set; }
}

public class Details
{
    public string Id { get; set; }
    public string ImageName { get; set; }
    public string Ville { get; set; }
    public string Pays { get; set; }
    public decimal Prix { get; set; }
    public double Rating { get; set; }
    public string Description { get; set; }
    public string DescriptionLongue { get; set; }
    public int Chambres { get; set; }
    public List<string> Options { get; set; }
    public int Voyageurs { get; set; }
    public Proprietaire Propriétaire { get; set; }
    public List<string> Galerie { get; set; }
}