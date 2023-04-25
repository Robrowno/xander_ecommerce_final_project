import Navbar from '../components/Navbar'
import "../assets/styles/home.css"
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <>
            <h1>Floom</h1>
            <img src="src/assets/images/hero-bg.png" alt="Hero gradient background"></img>
            <nav className="container">
                <ul>
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            
            <section className="hero">
                <div className="hero-text">
                    <div className="heading">
                        <h2>Great style with</h2>
                        <h2>a bad attitude.</h2>
                    </div>
                    <div className="text">
                        <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper semper. Sed sollicitudin nunc id est vestibulum gravida. Nullam nibh odio, imperdiet sed massa finibus, eleifend faucibus tellus. Morbi dapibus dolor sed lorem lacinia, et placerat ex pellentesque. </p>
                        <button type="button" className="btn">SHOP NOW</button>
                    </div>
                </div>
                {/*<Carousel />*/}
                <div className="hero-img">
                    <div className="product-name">
                        <p>New Balance Casa Blanca 327</p>
                    </div>
                    <div className="product-image">
                        <img src="src/assets/images/hero-trainers.jpg" alt="Image of New Balance Shoes"></img>
                    </div>
                </div>
            </section>
            <section className="collection">
                <h2>From the Collection</h2>
                <div className="card-collection">
                    <article className="product-card">
                        <div className="card-image">
                            <img src="src/assets/images/new_balance_shoe.jpg" alt="Image of a New Balance Shoe"></img>
                        </div>
                        <div className="card-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper semper.</p>
                        </div>
                    </article>
                    <article className="product-card">
                        <div className="card-image">
                            <img src="src/assets/images/new_balance_shoe.jpg" alt="Image of a New Balance Shoe"></img>
                        </div>
                        <div className="card-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper semper.</p>
                        </div>
                    </article>
                    <article className="product-card">
                        <div className="card-image">
                            <img src="src/assets/images/new_balance_shoe.jpg" alt="Image of a New Balance Shoe"></img>
                        </div>
                        <div className="card-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ullamcorper semper.</p>
                        </div>
                    </article>
                </div>
                
            </section>
        </>
        
    )
}

export default Home;