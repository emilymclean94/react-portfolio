import React from 'react';


export default function AboutMe() {
    return (
        <container className='vh-100'>
        <div className='row d-flex h-100 justify-content-center'>
            <div className='col-lg-5 bg-light w-25 h-50 text-center'>
                {/* <h1>Headshot</h1> */}
                <p>Headshot here</p>
            </div>
            <div className='col-lg-5 bg-light w-25 h-50 text-center'>
                <h1>About Me</h1>
                <p>Here's some text about me</p>
                <p>Skills icons here</p>
            </div>
        </div>
        </container>
    );
}