import React, { useState } from 'react';

export default function PortfolioCards(props) {
 const [isShown, setIsShown] = useState(false);
  return (


      <div className="card m-4 col-lg-8">
        <div className="card-group">
        <div className='card-body col-lg-4'>
           <img 
           onMouseOver={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}
           src={props.projectImg} alt='project screenshot' className='img-fluid' height="25%" />
          </div>
          {isShown && (
            <div>Repo Image/link (make separate component</div>
          )}
        <div className='card-body col-lg-4'>
          <h2>{props.title}</h2>
          <p> {props.description}</p>
        </div>
        </div>
      </div>

  )
}

