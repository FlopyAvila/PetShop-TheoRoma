import { useCart } from "../../Context/CartContext";
import styles from './Carrito.module.css'
import { Link } from "react-router-dom";

const Carrito = () => {
    const { cart, clearCart, getCartTotal, totalItems } = useCart();

    if (cart.length === 0){
        return(
            <div className={styles.vacio}>
                <h1>El carrito está vacio</h1>
                <p>Agrega productos para continuar la compra.</p>
                <Link to="/productos" className={styles.productos}>Ver productos</Link>
            </div>
        );
    }
    return(
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Mi Carrito de Compras</h1>
                <span className={styles.contador}>{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</span>
            </div>
            {cart.map(item => (
                <div key={item.id} className={styles.item}>
                    <img src={item.imagen} alt={item.nombre} className={styles.itemImg} />
                    <div className={styles.itemInfo}>
                        <h4 className={styles.itemNombre}>{item.nombre}</h4>
                        <p className={styles.itemCant}>Cantidad: {item.quantity}</p>
                        <p className={styles.itemPrecio}>Precio unitario: ${item.precio} c/u</p>
                    </div>
                    <div className={styles.itemRight}>
                        <p className={styles.itemCant}>x{item.quantity}</p>
                        <p className={styles.itemTotal}>${(item.precio * item.quantity)}</p>
                    </div>
                </div>
            ))}
            <button onClick={clearCart}>Vaciar Carrito</button>
            <hr />
            <h3>Total a pagar: ${getCartTotal()}</h3>
        </div>
    );
};

export default Carrito;

