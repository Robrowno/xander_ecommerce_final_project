import React, { useEffect, useState } from 'react';
import accessories from '../assets/images/bg-accessories.jpg'
import clothing from '../assets/images/bg-clothing.jpg'
import tech from '../assets/images/bg-tech.jpg'
import trainers from '../assets/images/hero-trainers.jpg'


const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function getCategories() {
        const res = await fetch('/categories.json');
        const data = await res.json();
        // console.log(data);
        setCategories(data);
    }
    getCategories();
  }, []);


  const handleCategoryChange = (event) => {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <section className='products-img'>
            <img src={accessories} alt="accessories"></img>
            <img src={clothing} alt="clothing" />
            <img src={tech} alt="tech" />
            <img src={trainers} alt="trainers" />
        </section>
    </article>
  );
}

export default Products;