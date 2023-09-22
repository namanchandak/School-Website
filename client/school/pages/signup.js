import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    userid: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint for user registration
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, you can redirect to a login page or display a success message
        alert("Registration successful");
        // Clear the form
        setFormData({
          name: "",
          userid: "",
          password: "",
        });
      } else {
        // Registration failed, handle the error accordingly
        const data = await response.json();
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>User ID</label>
          <input
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
