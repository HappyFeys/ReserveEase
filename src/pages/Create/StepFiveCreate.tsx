
import React, { useState } from "react";
import { StepProps } from "../../types/createLogement.type";

function StepFiveCreate({onDataChange}: StepProps) {
    const [price, setPrice] = useState<string>("");

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPrice(value);


        const parsedValue = parseFloat(event.target.value);
        onDataChange("prix", isNaN(parsedValue) ? 0 : parsedValue);
    };

    return (
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>A présent, fixez votre prix</h1>
                <p>Vous pouvez le modifier à tout moment</p>
            </div>

            <div className="stepCreate__price">
                <div className="stepCreate__price--input">
                    <label htmlFor="price">€</label>
                    <input 
                        type="number" 
                        value={price ? price : ""} 
                        onChange={handlePriceChange} 
                        min="0"
                        id="price"
                        />
                </div>
                <p>Prix à payer par le voyageur : {price && parseFloat(price) > 0 ? (parseFloat(price) * 1.2).toFixed(2): "0"}€</p>
            </div>
        </div>
    );
}

export default StepFiveCreate;
