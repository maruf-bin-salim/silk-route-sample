import React from 'react'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles['navbar']}>
            <img src="/lowResolution/logo.png" className={styles['logo']}></img>
            <div className={styles['links']}>
                <a className={styles['active-link']} href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Services</a>
                <a href='#'>Blogs</a>
                <a href='#'>FAQ</a>
                <a href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar