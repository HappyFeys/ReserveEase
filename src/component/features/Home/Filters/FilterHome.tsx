import { useEffect, useRef } from "react";
import { Filters } from "../../../../types/home.type";

// function FilterHome({filters} : Filters ) {
function FilterHome() {

    const filters = {
        localisation: [
            'Ville', 'Région', 'Pays',
            'Plages', 'Musées', 'Restaurants',
            'Stations de métro', 'Bus', 'Gares'
        ],
        typeHebergement: [
            'Appartement',
            'Maison',
            'Chambre d’hôtel',
            'Bungalow',
            'Villa',
            'Cabane',
            'Studio',
            'Maison de vacances',
            'Chambre d’hôte'
        ],
        equipements: [
            'Wi-Fi',
            'Climatisation',
            'Chauffage',
            'Cuisine équipée',
            'Lave-linge',
            'Sèche-linge',
            'Télévision',
            'Parking',
            'Piscine',
            'Jacuzzi',
            'BBQ',
            'Balcon/Terrasse',
            'Jardin',
            'Ascenseur'
        ],
        accessibilite: [
            'Accès aux personnes handicapées',
            'Équipements pour bébés'
        ],
        typeSejour: [
            'Séjour longue durée',
            'Séjour de courte durée',
            'Séjour pour les groupes',
            'Séjour romantique',
            'Séjour en famille'
        ],
        servicesSupplementaires: [
            'Petit-déjeuner inclus',
            'Service de ménage',
            'Transfert aéroport',
            'Service de conciergerie',
            'Animaux acceptés',
            'Fumeur/non-fumeur'
        ],
        confortEtStyle: [
            'Luxe',
            'Moderne',
            'Classique',
            'Rustique',
            'Éco-responsable'
        ],
        autres: [
            'Politique d\'annulation',
            'Offres spéciales' 
        ]
    };
    
    const scrollContainerRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
  
      const handleWheel = (event: WheelEvent) => {
        if (scrollContainer && event.deltaY !== 0) {
          event.preventDefault();
          scrollContainer.scrollLeft += event.deltaY;
        }
      };
  
      if (scrollContainer) {
        scrollContainer.addEventListener('wheel', handleWheel);
      }
  
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);

    return (
        <div className="filter" ref={scrollContainerRef}>
            {filters.localisation.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.typeHebergement.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.equipements.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.accessibilite.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.typeSejour.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.servicesSupplementaires.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.confortEtStyle.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
            {filters.autres.map((filter, index) => (
                <div key={filter+index} className="filter__item">{filter}</div>
            ))}
        </div>
    );
}

export default FilterHome;