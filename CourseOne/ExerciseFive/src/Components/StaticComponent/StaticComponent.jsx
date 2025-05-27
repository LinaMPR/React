const StaticComponent = () => {
    const items = ["Manzana", "Banana", "Cereza"];

    return(
        <ul>
            {
                items.map((items, index) => (
                    <li key={index} > {items} </li>
                ))
            }
        </ul>
    )
}

export default StaticComponent;