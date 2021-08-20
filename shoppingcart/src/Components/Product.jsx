import "./Product.css";
import { Link } from "react-router-dom";

let Product = () => {
    return (
        <div className="product">

            <Link to="/preview/1">
                <div className="product_img">
                    <img src="phone.jpg" />
                </div>
            </Link>

            <button className="product_button">Buy</button>

        </div>
    )
};
export default Product;