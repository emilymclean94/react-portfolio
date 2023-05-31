import React from 'react';
import EventEase from '../../../assets/event-ease.png'
import PlayerOne from '../../../assets/player-one-reads.png'
import PortfolioCards from './portfolioCards';

export default function Projects() {
    return (
        <section className='d-flex flex-column align-items-center'>
            <PortfolioCards projectImg={EventEase} title='Event Ease' description='The Event Planner is a web application built using MySQL, Node.js, and follows the MVC (Model-View-Controller) pattern. It allows users to plan and manage events, keeping track of attendees, RSVPs, and event details.'/>
            <PortfolioCards projectImg={PlayerOne} title='Player One Reads' description="This is a simple web application that generates book suggestions based upon the user's video game interests. The app works when a user inputs the title of a video game and may optionally select to narrow down results by category. The app then takes both inputs and returns three book suggestions and links to Google Books."/>
        </section>
    )
}

