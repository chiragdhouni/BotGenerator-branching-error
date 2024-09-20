import React from 'react';
import {

    Link,
  
  } from "react-router-dom";
const Page1 = () => {
  return (
    <div className="page1">
        <img src="./asset/gifs/top_right.gif" alt="book.gif" class="top-right-image" />
        <nav>
            <ul class="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><Link to="/dashboard">DashBoard</Link></li>
                <li><a href="#">Demo</a></li>
            </ul>
        </nav>
        <header>
            <h1>WELCOME</h1>
            <h2>To</h2>
            <h3>Conversify</h3>
        </header>
        <section className="features">
            <h2>Features</h2>
            <div className="feature-cards">
                <img src="./asset/gifs/bottom_left.gif" alt="gif" class="bottom-left-image" />
                <div className="card yellow">
                    <div className="arch"></div>
                    <div className="smallarch"></div>
                    <h3>No Coding Required</h3>
                    <p>We will handle that!</p>
                </div>
                <div className="card orange">
                    <div className="ladder"></div>
                    <h3>Human like Interaction</h3>
                    <p>Your New Best Friend!</p>
                </div>
                <div className="card green">
                    <div className="star"></div>
                    <h3>Artificial Intelligence</h3>
                    <p>Keeping up with technology</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Page1;
