import "../assets/styles/homePage.css"


import CardCarousel from '../components/Carousel'
import CategoryHome from "../components/CategoryHome"


const Home = () => {
    const imageUrl = [{ id: 1, grid:"item-grid-1", image: "bg-home.jpg", description: "Image of sofa for homeware category"},
    {id: 2, grid:"item-grid-2", image:"bg-accessories.jpg", description: "Image of wearable accessories for accessories category"},
    {id: 3, grid:"item-grid-3", image:"bg-tech.jpg", description:"Image of tech gadgets for technology category"},
    {id: 4, grid:"item-grid-4", image:"bg-clothing.jpg", description:"Image of clothing for clothing category"}]

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
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
                <h2>From the Collection</h2>
                <CardCarousel />
            </section>
            <section className="home-products-container">
                <h2>OUR PRODUCTS</h2>
                <div className="home-products-grid-lg">
                {imageUrl.map((imageItem) => (
                    <CategoryHome key={imageItem['id']} id={imageItem['id']} item={imageItem['image']} desc={imageItem['description']}/>)
                    
                )}
                {/* Added a more dynamic method to retrieve category details to display on homepage */}
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