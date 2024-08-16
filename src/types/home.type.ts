

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

interface Proprietaire {
    name: string;
    imageName: string;
}

export interface Logement {
    id: string;
    imageName: string;
    ville: string;
    pays: string;
    prix: number;
    rating: number;
    description: string;
    descriptionLongue: string;
    chambres: number;
    options: string[];
    voyageurs: number;
    propriétaire: Proprietaire;
    galerie: string[];
}

export interface ApiResponse {
    message: string;
    error: number;
    filter: Filters;
    logementRecomanded: Logement[];
    logementList: Logement[];
}
  
  