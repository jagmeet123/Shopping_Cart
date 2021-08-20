import { useHistory } from "react-router-dom";
import "./home.css";
import Product from "./Product";

let Home = () => {

    let history = useHistory();
    return (
        <>
            <div className="product-preview-container">
                <Product />
                <Product />
                <Product />
            </div>
            <button className="cart-button" onClick={() => {
                history.push("/cart");
            }}>
                <span class="material-icons">shopping_cart</span>
            </button>
        </>
    )
};
export default Home;