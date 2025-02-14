import React, { useState } from "react";

function Profile() {
    const [allergens, setAllergens] = useState([]);
    const [input, setInput] = useState("");

    const addAllergen = () => {
        if (input.trim()) {
            setAllergens([...allergens, input.trim()]);
            setInput("");
        }
    };

    return (
        <div>
            <h1>My Profile</h1>
            <h2>Allergens:</h2>
            <ul>
                {allergens.map((allergen, index) => (
                    <li key={index}>{allergen}</li>
                ))}
            </ul>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add allergen"
            />
            <button onClick={addAllergen}>Add</button>
        </div>
    );
}

export default Profile;
