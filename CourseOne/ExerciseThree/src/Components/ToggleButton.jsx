import { useState } from "react";

const ToogleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return(
        <button onClick={() => setIsActive(!isActive)}>
            {
                isActive ? "Activo" : "Inactivo"
            }
        </button>
    )
}

export default ToogleButton;