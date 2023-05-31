import React from 'react';
import headshot from '../../../assets/headshot.jpg';

const styles = {
    img: {
    borderTopRightRadius: '150px',
    borderTopLeftRadius: '150px',
    },
    aboutContainer: {
        background: 'white',
    }
}
export default function AboutMe() {

    return (
        <container style={styles.aboutContainer}>
            <div className='row d-flex h-75 vw-100 justify-content-center align-content-center'>
                <div className='bg-light vw-100 d-flex justify-content-around'>
                    <div className='col-lg-4 bg-light d-flex'>
                        <div className='d-flex justify-content-center'>
                            <img src={headshot} alt='headshot' className=' img-fluid mx-5 py-4' style={styles.img} />
                        </div>
                    </div>
                        <div className='col-lg-7 bg-light text-center py-4'>
                            <h1>About Me</h1>
                            <p>Here's some text about me</p>
                            <p>Skills icons</p>
                        </div>
                </div>
            </div>
        </container>
    );
}