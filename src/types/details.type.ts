import { Logement } from "./home.type";


// Type pour la réponse de l'API
export interface ApiResponseDetails {
    error: number;
    message: string;
    logement: Logement;
}