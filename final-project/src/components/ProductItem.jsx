import { Link } from "react-router-dom";

const ProductItem = (props) => {
    const {img,alt,name,price,description,rating} = props;
    return (
        <article className="product-display" key={props.key}>
            <img src={img} alt={alt}/>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <p>Product Rating: {rating}/5</p>
            <Link to="/products/product" className="product-page-link">
                <button className="view-details" type="button">View Details</button>
            </Link>
        </article>
    )
} 

export default ProductItem;
