import React, { useEffect, useState } from 'react';
import accessories from '../assets/images/bg-accessories.jpg'
import clothing from '../assets/images/bg-clothing.jpg'
import trainers from '../assets/images/hero-trainers.jpg'
import ProductItem from '../components/ProductItem';


const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getCategories() {
        const res = await fetch('/categories.json');
        const data = await res.json();
        console.log(data);
        setCategories(data);
    }
    getCategories();
  }, []);


  const handleCategoryChange = (event) => {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
    setSelectedItem(event.target.options.selectedIndex);
  }

  useEffect(() => {
    async function getProducts(){
      const response = await fetch('/products.json');
      const jsonResponse = await response.json();
      setProducts(jsonResponse);
      console.log(jsonResponse);
    }
    getProducts();

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const categorizedItems = products.filter( product => product.fields["category"] === Number(selectedItem));

    setFilteredProducts(categorizedItems);
    console.log(categorizedItems);

  };

  return (
    <article className='products'>
        <section className='product-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dropdown">Categories: </label>
                <select id="dropdown" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select category</option>
                    {categories.map((category) => (
                        <option key={category.pk} value={category.fields["friendly_name"]}>{category.fields["friendly_name"]}</option>
                    ))}
                </select>
                <input type="submit" value="Search"/>
            </form>
        </section>
        {/* <section className='products-img'>
            <img src={accessories} alt="accessories"></img>
            <img src={clothing} alt="clothing" />
            <img src={trainers} alt="trainers" />
        </section> */}
        <section className="product-container">
          { filteredProducts.map((product) => (
            <ProductItem key={product.pk} img={product.fields["image_url"]} alt={product.fields["name"]} name={product.fields["name"]}
            price={product.fields["price"]} rating={product.fields["rating"]} description={product.fields["description"]} />
          
          ))}
        </section>
        
    </article>
  );
}

export default Products;