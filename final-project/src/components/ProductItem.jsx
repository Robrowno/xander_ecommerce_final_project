const ProductItem = (props) => {
    const {key,img,alt,name,price,description,rating} = props;
    return (
        <article key={key}>
            <img src={img} alt={alt}/>
            <h4>{name}</h4>
            <h5>{price}</h5>
            <p>{description}</p>
            <p>{rating}</p>
        </article>
    )
} 

export default ProductItem;

