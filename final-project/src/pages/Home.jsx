
import "../assets/styles/homePage.css"
import Carousel from '../components/Carousel'
import CategoryHome from "../components/CategoryHome"

const Home = () => {
    return (
        <article className='homepage-container'>
            {/* <h1>Floom</h1> */}
            <img className="hero-image-background" src="src/assets/images/hero-bg.png" alt="Hero gradient background"></img>
            <section className="hero-container">
                <div className="hero-text">
                    <div className="heading">
                        <h1>Great style with a bad attitude.</h1>
                    </div>
                    <div className="text">
                        <p className="intro-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ab nisi voluptas amet labore modi optio velit voluptatem mollitia.</p>
                        <button type="button" className="btn-shop-now">SHOP NOW</button>
                    </div>
                </div>
                {/*<Carousel />*/}
                <div className="hero-img">
                    <div className="carousel-paragraph">
                        <p>New Balance Casa Blanca 327</p>
                        <img src="src/assets/images/hero-trainers.jpg" alt="Image of New Balance Shoes"></img>
                    </div>                    
                </div>
            </section>
            <section className="collection">
                <h2>From the Collection</h2>
                <div className="card-collection">
                    <article className="product-card">                      
                        <img src="src/assets/images/black-shirt.jpg" alt="Image of a New Balance Shoe"></img>
                        <h3>Adidas Shock Energy Tee</h3>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper semper.</p>                       
                        <button className="btn-view-item">VIEW ITEM</button>
                    </article>
                </div>       
            </section>
            <section className="home-products-container">
                <h2>OUR PRODUCTS</h2>
                <CategoryHome />
                <CategoryHome />
            </section>
            <section>
                
            </section>
        </article>
        
    )
}
export default Home;