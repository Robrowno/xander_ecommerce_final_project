import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

const Profile = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    postcode: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setFormData({
      // Preserve the values that aren't being updated
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    return (
      <>
        <article className="profile">            
            <img src="https://placehold.co/130x130"></img>
            <form onSubmit={handleSubmit}>
                <FaPen className="profile__icon"/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={formData.password}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={handleChange} value={formData.address}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={handleChange} value={formData.city}/>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" onChange={handleChange} value={formData.country}/>
                <label htmlFor="postcode">Postcode</label>
                <input type="text" id="postcode" name="postcode"/>
                <input type="submit" value="Save"></input>
            </form>
        </article>
        <article className="orders">
            <h3>ORDERS</h3>
            <section className="order__item">
                <div>
                    <p>Order number:</p>
                    <p>Order placed:</p>
                    <p>Delivered:</p>
                </div>
                <div>
                    <h4>Items:</h4>
                    <div className="order__item--flex">
                        <img src="https://placehold.co/80x80"></img>
                        <ul>
                            <li>Product Description</li>
                            <li>£45.50</li>
                        </ul>
                    </div>
                    <h4>Total:</h4>
                </div>
            </section>
        </article>       
        <Link to="/">
            Home
        </Link>
      </>
    );
  };
  export default Profile;