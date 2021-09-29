import React from 'react'
import styles from './PrimeiroAcesso3.module.css';
import  Logo from '../Assets/Home/Logo.png';
import  Linha from '../Assets/PrimeiroAcesso1/linha1.png';
import {ReactComponent as Curva} from '../Assets/PrimeiroAcesso1/curva.svg';
import  Linha2 from '../Assets/PrimeiroAcesso1/linha2.png';
import  Oval from '../Assets/PrimeiroAcesso1/Oval.png';
import {ReactComponent as Relatorios} from '../Assets/PrimeiroAcesso1/relatorios.svg';
import {Link} from 'react-router-dom';
const PrimeiroAcesso1 = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    return (
    <>
         <div className={styles.tela}>


             <img src={Logo} className={styles.logo} />
            <div className={styles.linha2}>
                <img src={Linha}  width= '100%'/>
             </div>
            <Curva className={styles.onda}/>
         
            <div className={styles.linha1}>
                <img src={Linha2}  width= '100%'/>
             </div>
             <div className={styles.oval1}>
                <img src={Oval}  width= '100%'/>
             </div>
             <div className={styles.oval2}>
                <img src={Oval}  width= '100%'/>
             </div>

             <div className={styles.vetor}>
             <Relatorios/>
             </div>

            <h3 className={styles.texto1}>Obtenha relatórios precisos sobre os seus clientes</h3>
            <h3>e a sua empresa</h3>

           
            
            <Link to="/alterarsenha" className={styles.text2}>
              
            <div className={styles.button}>
                <p>Começar a utilizar:</p>
            </div>
            </Link>

            <div className={styles.containerslider}>
            <Link to="/boasvindas" className={styles.text2}>
                 <div className={styles.slider1}>
                    
                </div>
                </Link>
                
                <Link to="/boasvindas2" className={styles.text2}>
                    <div className={styles.slider1}>
                    
                    </div>
                </Link>
                <Link to="/boasvindas3" className={styles.text2}>
                    <div className={styles.slider1}>
                    <div className={styles.sliderdentro}></div>
                    </div>
                </Link>
            </div>
         
         </div>

         
    </>
    )
}

export default PrimeiroAcesso1;