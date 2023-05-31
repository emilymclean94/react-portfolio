import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const styles = {
    icons: {
        color: '#cb997e',
        marginBottom: '2px',
    } 
}

export default function Footer() {
    return (
        <container className='footer'>
            <row>
                <ul className='d-flex justify-content-center'>
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
            </row>
        </container>
    )
}