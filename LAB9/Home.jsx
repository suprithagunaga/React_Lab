import React from 'react';
function Home(){
    return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to My Website</h1>
      <p>
        This is the home page of our React application. We built this app using
        React Router for navigation between pages.
      </p>

      <h2>What You Can Do Here</h2>
      <ul style={{ listStyle: "none" }}>
        <li>🚀 Explore our features</li>
        <li>📖 Learn more about us</li>
        <li>📞 Contact us anytime</li>
      </ul>
    </div>

    )
} export default Home;
