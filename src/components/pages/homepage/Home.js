import React from 'react';
import './home.css';


export default function AboutMe() {
    return (
      <section className='h-75 d-flex flex-wrap align-content-center'>
      <div className='home-div my-5 d-flex flex-column align-items-center container'>
        <h1 id='name' className='display-4'>Hi, I'm Emily McLean.</h1>
        <h3 className='text-center p-3'>
          I'm a Full Stack Web Developer! 
        </h3>
        <a 
        //! Will need to fix conditional rendering so this button works.
        href="#Portfolio" 
        id='portfolioBtn' className="portfolioBtn btn btn-lg p-2 px-5" role="button" aria-pressed="false">Portfolio</a>
      </div>
      </section>
    );
  }