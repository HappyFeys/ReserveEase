
import React, { useState } from "react";
import { StepProps } from "../../types/createLogement.type";

function StepFiveCreate({onDataChange}: StepProps) {
    const [price, setPrice] = useState<number>(0);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setPrice(isNaN(value) ? 0 : value); 
        onDataChange("prix", value);
    };

    return (
        <div>
            <h1>A présent, fixez votre prix</h1>
            <p>Vous pouvez le modifier à tout moment</p>

            <input 
                type="number" 
                value={price} 
                onChange={handlePriceChange} 
                min="0"

            />

            <p>Prix à payer par le voyageur : {price > 0 ? (price * 1.2).toFixed(2) : 0}€</p>
        </div>
    );
}

export default StepFiveCreate;
