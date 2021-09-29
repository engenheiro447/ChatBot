import React from 'react'
import styles from './Dashboard.module.css';
import {Link} from 'react-router-dom';
import  Logo from '../Assets/Home/Logo.png';
import  LogoIF from '../Assets/Dashboard/if.png';
import Menusup from './Menusup';
const Dashboard = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    return (
    <>
       <Menusup/>

        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.perguntas}></div>
                <p>Perguntas e</p>
                <p>respostas</p>
            </div>

            <Link to="/produtosservicos" className={styles.text2}> 
            <div className={styles.card}>
            <div className={styles.produtos}></div>
                <p>Produtos e</p>
                <p>Serviços</p>
            </div>
            </Link>

            <div className={styles.card}>
                <div className={styles.chat}></div>
                <p>Chat ao vivo</p>
                
            </div>

            <div className={styles.card}>
                <div className={styles.departa}></div>
                <p>Departamentos</p>
                
            </div>

            <div className={styles.card}>
                <div className={styles.relato}></div>
                <p>Relatórios</p>
                
            </div>

            <div className={styles.card}>
                <div className={styles.config}></div>
                <p>Configurações</p>
                
            </div>

            <div className ={styles.clear}></div>

            
        </div>

        <p className={styles.para}>Um software desenvolvido por:</p>
            <div className={styles.if}>
            <img src={LogoIF} className={styles.iflogo} />
        </div>


    </>
    )
}

export default Dashboard;