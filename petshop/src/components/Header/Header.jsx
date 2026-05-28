import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useCart } from "../../Context/CartContext";

function Header(){
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li className={styles.carrito}><Link to="/carrito">Carrito {totalItems > 0 && <span>{totalItems}</span>}</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;