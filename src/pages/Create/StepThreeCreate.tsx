import React, { useEffect, useState } from "react";
import { StepProps } from "../../types/createLogement.type";

function StepThreeCreate({onDataChange}: StepProps) {
    const [photos, setPhotos] = useState<File[]>([]);

    const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newPhotos = Array.from(files);
            if (photos.length + newPhotos.length > 5) {
                alert("Vous ne pouvez ajouter que 5 photos au maximum.");
                return;
            }
            setPhotos([...photos, ...newPhotos]);
        }
    };

    const handleRemovePhoto = (index: number) => {
        const newPhotos = photos.filter((_, i) => i !== index);
        setPhotos(newPhotos);
    };

    useEffect(() => {
        onDataChange("galerie", photos);
        onDataChange("imageName", photos.length > 0 ? photos[0].name : "");
    }, [photos, onDataChange]);

    console.log(photos);
    return (
        <div className="stepCreate">
            <div className="stepCreate__header">
                <h1>Ajoutez quelques photos de votre maison</h1>
                <p>Pour commencer, vous aurez besoin de 5 photos. Vous pourrez en ajouter d'autres ou faire des modifications plus tard.</p>
            </div>
            <div className="photos-uploader">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleAddPhoto}
                    id="file"
                />
                <label htmlFor="file">Choisir un fichier</label>
                <p style={photos.length > 0 ? {display: "none" } : { }}>Aucun fichier sélectionné</p>

            </div>
            <div className="photos-preview--container">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-preview">
                        <img
                            src={URL.createObjectURL(photo)}
                            alt={`photo-${index + 1}`}
                            className="photo-thumbnail"
                        />
                        <button onClick={() => handleRemovePhoto(index)}>
                            ✖
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StepThreeCreate;
