import { useParams } from "react-router";
import {useEffect, useState} from "react";
import "../assets/styles/singleProduct.css"


const SingleProduct = () => {
    const [product,setProduct] = useState([])
    
    useEffect(() => {
        async function getProduct(){
            try{
                const response = await fetch('/products.json'); {/* get data from the products.json file*/}
                const jsonResponse = await response.json(); {/* convert to array of objects */}
                setProduct(jsonResponse);
            }catch(error){
                console.log(error);
            }
           
        }
        getProduct();
    
      }, []);

      if (!product || product.length === 0){
        return <div>Loading...</div>
      }
    
    

    const {id} = useParams();
    const selectedProduct = product.find((item) => item.pk === Number(id));

    
    const { image_url, name, price, rating, description} = selectedProduct.fields
    return (
        <div style={{margin:"4rem 0 3rem 0"}}>
            <section className='section-product'>
                <img className="section-product-img" src={image_url}></img>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <h4>Rating: {rating}/5</h4>
                <p className="description">{description}</p>
                <button type="button" className="cartButton">
                Add to Cart</button>
            </section>
        </div>
        
    ) 
}

export default SingleProduct;