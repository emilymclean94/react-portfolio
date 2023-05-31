import React from 'react';
import './home.css';


export default function Home() {
    return (
      <section className='h-75 d-flex flex-wrap align-content-center'>
      <div className='home-div my-5 d-flex flex-column align-items-center container'>
        <h1 id='name' className='display-4'>Hi, I'm Emily McLean.</h1>
        <h3 className='text-center p-3 w-50'>
          I'm a Full-Stack Web Developer who loves solving problems and creating user-friendly experiences.
        </h3>
        <span className='portfolioBtn'>Portfolio</span>
      </div>
      </section>
    );
  }