import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ScanResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const barcode = queryParams.get("barcode");

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (barcode) {
            axios.get(`http://localhost:5000/scan/${barcode}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error("Error fetching product:", error));
        }
    }, [barcode]);

    return (
        <div>
            <h1>Scan Result</h1>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>Ingredients: {product.ingredients}</p>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
}

export default ScanResult;
