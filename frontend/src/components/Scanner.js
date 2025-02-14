import React, { useState } from "react";
import Quagga from "quagga";
import { useNavigate } from "react-router-dom";

function Scanner() {
    const [barcode, setBarcode] = useState("");
    const navigate = useNavigate();

    const startScanner = () => {
        Quagga.init({
            inputStream: { type: "LiveStream", constraints: { facingMode: "environment" } },
            decoder: { readers: ["ean_reader"] }
        }, function(err) {
            if (!err) {
                Quagga.start();
                Quagga.onDetected((result) => {
                    Quagga.stop();
                    setBarcode(result.codeResult.code);
                    navigate(`/scan-result?barcode=${result.codeResult.code}`);
                });
            }
        });
    };

    return (
        <div>
            <button onClick={startScanner}>Scan Barcode</button>
            {barcode && <p>Scanned Barcode: {barcode}</p>}
        </div>
    );
}

export default Scanner;
