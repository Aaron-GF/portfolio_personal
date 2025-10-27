// utiliza la libreria fingerprintjs para obtener un identificador único del usuario
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export function useFingerprint() {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    async function getFingerprint() {
      let visitorId = localStorage.getItem("fp"); // si ya existe un identificador, lo recupera
      if (!visitorId) {
        const fp = await FingerprintJS.load(); // inicializa la librería
        const result = await fp.get(); // obtiene el identificador
        visitorId = result.visitorId; // extrae el identificador único
        localStorage.setItem("fp", visitorId);
      }
      setFingerprint(visitorId);
    }
    getFingerprint();
  }, []);

  return fingerprint;
}
