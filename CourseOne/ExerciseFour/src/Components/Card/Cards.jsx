//import "./Styles.css"
//import styles from "./Card.module.scss"

const Card = () => {
    const textStyles = {
        color: "blue",
        fontSize:"2rem",
        textAling: "center",
    }
    
    return(
        <div style={textStyles}>
            Soy una card!
        </div>
    )
}

export default Card;