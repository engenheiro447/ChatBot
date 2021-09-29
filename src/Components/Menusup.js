import React from 'react'
import styles from './Menusup.module.css';
import  Logo from '../Assets/Home/Logo.png';
import {Link} from 'react-router-dom';
const Menusup = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    return (
    <>
        <div className={styles.menu}>

        <Link to="/dashboard" className={styles.text2}>
            <div className={styles.logo}>
                <img src={Logo} className={styles.logo} />
            </div>
        </Link>
            

            <div className={styles.perfil}></div>

            <div className={styles.notifica}></div>
            <div className ={styles.clear}></div>
        </div>
    </>
    )
}

export default Menusup;