const ProductItem = (props) => {
    const {key,img,alt,name,price,description,rating} = props;
    return (
        <article className="product-display" key={key}>
            <img src={img} alt={alt}/>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <p>Product Rating: {rating}/5</p>
            <button className="view-details" type="button">View Details</button>
        </article>
    )
} 

export default ProductItem;

