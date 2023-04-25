
import "../assets/styles/homePage.css"


import Carousel from '../components/Carousel'
import CategoryHome from "../components/CategoryHome"

const Home = (props) => {
    return (
        <article className='homepage-container'>
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
                <h2>FROM THE COLLECTION</h2>
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
                <div className='products-card-home-grid-lg'>
                    <CategoryHome className="categoryHome-1"/>
                    <CategoryHome className="categoryHome-2"/>
                    <CategoryHome className="categoryHome-3"/>
                    <CategoryHome className="categoryHome-4"/>
                </div>
            </section>
            <section className="additional-info">
                <img src="src/assets/images/bg-headphones.jpg" alt="" />
                <div className="additional-info-text">
                    <div className="additional-info-text-left">
                        <h2>Timeless designs fit for any purpose.</h2>
                        <p>Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.</p>
                    </div>
                    <div className="additional-info-text-right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci beatae inventore consequuntur, optio sed illo.</p>
                        <button className="btn-learn-more">LEARN MORE</button>
                    </div>
                </div>
            </section>
        </article>
        
    )
}
export default Home;