import '../assets/styles/categoryHome.css'

const CategoryHome = (props) => {
    const {id, item, desc} = props;
    
    return (
        <div className='products-card-home-container' id={id}>
            <div className="products-card-home">
                <img src={`src/assets/images/${item}`} alt={desc} />{/* Access image attributes through props*/}
                <div className="card-text-home">
                    <h3>Houseware</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>       
        </div>      
    )    
}


export default CategoryHome;