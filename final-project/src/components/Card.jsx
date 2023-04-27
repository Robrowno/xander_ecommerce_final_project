import { Link } from "react-router-dom";
const Card = (props) => {
    const {id,image,title,description} = props;
    return (
        <div className="card-collection">
            <article className="product-card">                      
                <img src={image} alt={description}></img>
                <h3>{title}</h3>  
                <p>{description}</p>
                <Link to={`/products/product/${id}`} className="product-page-link">
                    <button className="btn-view-item" type="button">VIEW ITEM</button>
                </Link>
            </article>
        </div>
    )
}

export default Card;