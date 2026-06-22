import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import "./App.css";
export default function App() {
  const [data, setData] = useState({name: "",email: "",password: ""});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    const err = {};
    if (!data.name) err.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(data.email))
      err.email = "Enter valid email";
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(data.password))
      err.password = "Min 6 chars, 1 uppercase, 1 number, 1 special char";
    setErrors(err);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({...data,[name]: DOMPurify.sanitize(value.trim())
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setSubmitted(data);
      setData({name: "",email: "",password: ""});
    }
  };
  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={data.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <small>{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <small>{errors.email}</small>}

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
        />
        {errors.password && <small>{errors.password}</small>}

        <label className="checkbox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}/>Show Password</label>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}>Submit</button>
      </form>
      {submitted && (
        <div className="output">
          <h3>Submitted Data</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}
