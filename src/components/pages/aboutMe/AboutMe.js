import React from 'react';
import headshot from '../../../assets/headshot.jpg';

const styles = {
    img: {
    borderTopRightRadius: '150px',
    borderTopLeftRadius: '150px',
    },
    aboutContainer: {
        backgroundColor: '',
    }
}
export default function AboutMe() {

    return (
        <container className='m-auto h-75' style={styles.aboutContainer}>
            <div className='row d-flex vh-auto m-auto justify-content-center align-content-center'>
                <div className='bg-light d-flex flex-wrap justify-content-around'>
                    <div className='col-lg-4 col-md-12 bg-light d-flex'>
                        <div className='d-flex justify-content-center'>
                            <img src={headshot} alt='headshot' className=' img-fluid mx-5 py-4' style={styles.img} />
                        </div>
                    </div>
                        <div className='col-lg-8 col-md-12 bg-light d-flex flex-wrap flex-column align-items-center text-center py-4'>
                            <h1>Who is Emily McLean?</h1>
                            <div className='col-lg-7'>
                            <p>I'm a recent graduate from the University of Central Florida Full-Stack Bootcamp and I have two degrees in Anthropology from Florida State University.
                                <br />
                                <br />
                            I'm a dedicated learner who loves solving problems.
                            </p>
                            </div>
                            <p>Skills icons</p>
                        </div>
                </div>
            </div>

        </container>
    );
}