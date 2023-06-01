import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const styles = {
    icons: {
        color: '#cb997e',
        margin: '0px',
    } 
}

export default function Footer() {
    return (
        <footer className='footer'>
                <ul className='d-flex justify-content-center m-0'>
                    <li>
                        <h2>
                        <a href="https://github.com/emilymclean94" style={styles.icons}>
                            <FaGithub />
                        </a>
                        </h2>
                    </li>
                    <li>
                        <h2>
                        <a href="https://www.linkedin.com/in/emily-mclean-2a4896100/" style={styles.icons}>
                            <FaLinkedin />
                        </a>
                        </h2>
                    </li>
                </ul>
        </footer>
    )
}