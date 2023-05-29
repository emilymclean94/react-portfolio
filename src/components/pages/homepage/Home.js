import React from 'react';
import './home.css';


export default function AboutMe() {
    return (

      <div className='border border-danger my-5c d-flex flex-column align-items-center container'>
        <h1 id='name'>Hi, I'm Emily.</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
        <a 
        //! Will need to fix conditional rendering so this button works.
        href="#Portfolio" 
        className="btn btn-danger btn-lg" role="button" aria-pressed="false">Portfolio</a>
      </div>
    );
  }