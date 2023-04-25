const Card = (props) => {
    const {image,title,description} = props;
    return (
        <div className="card-collection">
            <article className="product-card">                      
                <img src={image} alt={description}></img>
                <h3>{title}</h3>  
                <p>{description}</p>                       
                <button className="btn-view-item">VIEW ITEM</button>
            </article>
        </div>
    )
}

export default Card;