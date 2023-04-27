import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import { useState, useEffect } from 'react';


const CardCarousel = () => {
  const [products, setProducts] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1400, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    async function getProducts(){
      const response = await fetch('/products.json');
      const jsonResponse = await response.json();
      setProducts(jsonResponse);
    }
    getProducts();

  }, []);

  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <Card key={product.pk} id={product.pk} image={product.fields['image_url']} title={product.fields['name']}/>
      ))
      }
        
    </Carousel>
  )
}

export default CardCarousel;