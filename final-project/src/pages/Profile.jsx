import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

const Profile = () => {
    
  const [inputStatusDisabled, setinputStatusDisabled] = useState(true);

  const [formData, setFormData] = useState({
    fname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
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

  const handleClick = () => {
    setinputStatusDisabled(false);
  }

    return (
      <div className="profile-page">
        <article className="profile">            
            <img src="https://placehold.co/130x130"></img>
            <form onSubmit={handleSubmit}>
                <FaPen className="profile__icon" onClick={handleClick}/>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" onChange={handleChange} value={formData.fname} disabled={inputStatusDisabled}/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" onChange={handleChange} value={formData.lastname} disabled={inputStatusDisabled}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} disabled={inputStatusDisabled}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} disabled={inputStatusDisabled}/>
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="phonenumber" id="phonenumber" name="phonenumber" onChange={handleChange} value={formData.phonenumber} disabled={inputStatusDisabled}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={handleChange} value={formData.address} disabled={inputStatusDisabled}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={handleChange} value={formData.city} disabled={inputStatusDisabled}/>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" onChange={handleChange} value={formData.country} disabled={inputStatusDisabled}/>
                <label htmlFor="postcode">Postcode</label>
                <input type="text" id="postcode" name="postcode" disabled={inputStatusDisabled}/>
                <label for="myfile">Select an image for your profile:</label>
                <input type="file" id="myImage" name="myImage" disabled={inputStatusDisabled}></input>
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
      </div>
    );
  };
  export default Profile;