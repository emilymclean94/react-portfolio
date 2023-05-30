import React from 'react';

export default function Portfolio() {
  return (
    <section className='d-flex flex-column align-items-center'>
      <div className="card text-center m-4 col-lg-6">
        <div className="card-header">
          <h2>Project goes here</h2>
        </div>
        <div className="card-body">
          <p>Description Goes Here</p>
        </div>
      </div>
      <div className="card text-center my-2 col-lg-6">
        <div className="card-header">
          <h2>Project goes here</h2>
        </div>
        <div className="card-body">
          <p>Description Goes Here</p>
        </div>
      </div>
      <div className="card text-center mt-2 mb-4 col-lg-6">
        <div className="card-header">
          <h2>Project goes here</h2>
        </div>
        <div className="card-body">
          <p>Description Goes Here</p>
        </div>
      </div>
    </section>
  )
}