import React from 'react';

export default function Portfolio() {
  return (
    <section className='d-flex flex-column align-items-center'>
      <div className="card m-4 col-lg-8">
        <div className="card-group">
        <div className='card-body col-lg-1'>
            <p>
              aksjdhjsaflkasjflksjdlksjadsad
            </p>
          </div>
        <div className='card-body col-lg-4'>
          <h2>Event Ease</h2>
          <p>The Event Planner is a web application built using MySQL, Node.js, and follows the MVC (Model-View-Controller) pattern. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details.</p>
        </div>
        </div>
      </div>
      <div className="card m-4 col-lg-8">
        <div className="card-group">
          <div className='card-body col-lg-1'>
            <p>
              aksjdhjsaflkasjflksjdlksjadsad
            </p>
          </div>
          <div className='card-body col-lg-4'>
          <h2>Player One Reads</h2>
          <p>This is a simple web application that generates book suggestions based upon the user's video game interests. The app works when a user inputs the title of a video game and may optionally select to narrow down results by category. The app then takes both inputs and returns three book suggestions and links to Google Books.</p>
          </div>
        </div>
      </div>
    </section>
  )
}