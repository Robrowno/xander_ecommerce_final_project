import { Link } from "react-router-dom";

const ProductItem = (props) => {
    const {img,id,alt,name,price,rating} = props;
    return (
        <article className="product-display" key={id}>
            <img src={img} alt={alt}/>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <p>Product Rating: {rating}/5</p>
            <Link to={`/products/product/${id}`} className="product-page-link">
                <button className="view-details" type="button">View Details</button>
            </Link>
        </article>
    )
} 

export default ProductItem;
