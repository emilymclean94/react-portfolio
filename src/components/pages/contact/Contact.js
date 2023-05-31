import React from 'react';


export default function Contact() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='col-lg-5 d-flex flex-column align-items-stretch'>
                <h1 className='text-center'>Contact me</h1>
                <form className='d-flex flex-column'>
                    <div class="form-group">
                        <label for="contactName">Name</label>
                        <input type="text" class="form-control" id="contactName" placeholder="Leslie Knope" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="leslieknope@pawnee.com" />
                    </div>
                    <div class="form-group">
                        <label for="contactMessage">Message</label>
                        <input type="text" class="form-control" id="contactMessage" placeholder="I love the projects you've done!" />
                    </div>
                    <button type="submit" class="btn btn-primary m-4 align-self-center">Submit</button>
                </form>
            </div>
        </div>
    )
}