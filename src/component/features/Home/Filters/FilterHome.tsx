import { useEffect, useRef } from "react";
import { Filters } from "../../../../types/home.type";

interface FilterHomeProps {
    filters: Filters
}

function FilterHome({ filters } : FilterHomeProps ) {
    
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