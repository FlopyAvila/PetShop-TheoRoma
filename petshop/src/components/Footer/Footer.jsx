import Nosotros from "../Nosotros/Nosotros";
import styles from "./Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <Nosotros/>
            <p>&copy; Hecho por Florencia Avila - 2026</p>
        </footer>
    );
}

export default Footer;