import React from 'react';


export default function Contact() {
    return (
        <div>
            <h1>Contact me</h1>
            <form>
            <div class="form-group">
                    <label for="contactName">Name</label>
                    <input type="text" class="form-control" id="contactName" placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                </div>
                <div class="form-group">
                <label for="contactMessage">Message</label>
                    <input type="text" class="form-control" id="contactMessage" placeholder=""/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}