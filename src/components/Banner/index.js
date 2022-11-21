import imagem from "../images/banner.png"
import "./style.css"


function Banner () {
    return(
        <header className="banner">

            <img className="bannerimg" src={imagem} alt="Banner do site" />
        </header>

    )
}

export default Banner