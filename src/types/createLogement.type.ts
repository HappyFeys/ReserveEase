import { Filters } from "./home.type"

export interface GetFiltersType {
    error: number
    message: string
    filter: Filters
}

export interface CreateLogementType {
        title: string
        ville: string 
        pays: string
        adresse: string
        prix: number
        descriptionCourte: string
        descriptionLongue: string
        chambres: number
        options: Filters
        voyageurs: number
        galerie : File[]
        imageName : string
}

export interface StepProps {
    onDataChange : (key: string, data: any, subKey?: string) => void
}