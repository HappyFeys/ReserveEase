export interface Logement {
    id: string;
    imageName: string;
    ville: string;
    pays: string;
    prix: number;
    rating: number;
    description: string;
    chambres: number;
    voyageurs: number;
}

export interface Filters {
    localisation: string[];
    typeHebergement: string[];
    equipements: string[];
    accessibilite: string[];
    typeSejour: string[];
    servicesSupplementaires: string[];
    confortEtStyle: string[];
    autres: string[];
}
  
  