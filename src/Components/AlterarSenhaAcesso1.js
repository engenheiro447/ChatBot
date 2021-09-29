import React from 'react'
import styles from './AlterarSenhaAcesso1.module.css';
import  Logo from '../Assets/AlterarSenha1/logo.png';
import  Linha1 from '../Assets/AlterarSenha1/Linha1.png';
import {ReactComponent as Robo} from '../Assets/AlterarSenha1/robo.svg';
import {ReactComponent as Onda1} from '../Assets/AlterarSenha1/onda1.svg';
import {ReactComponent as Onda2} from '../Assets/AlterarSenha1/onda2.svg';
import {Link} from 'react-router-dom';

const AlterarSenhaAcesso1 = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    return (
    <>
     <div className={styles.esq}>
        <div className={styles.logo}>
            <img src={Logo}/>
        </div>
            
        <h3>Aumente suas vendas e melhore o engajamento com</h3>
        <h3>seus clientes</h3>

        <div className={styles.controbo}>
            <Robo className={styles.robo}/>
        </div>

        <div className={styles.ondaesq}></div>     
     </div>

     <div className={styles.dir}>
         <div className = {styles.conttext}>
             <h2> Altere a sua senha</h2>
             <p>Para a sua segurança, altere a sua</p>
             <p>senha padrão!</p>

             <div className={styles.margin1}>    
                <input type="password" className ={styles.userform} name="name" placeholder= "Senha atual"/>         
            </div>
            <div className={styles.campoform}>    
                <input type="password" className ={styles.userform} name="name" placeholder= "Nova senha"/>         
            </div>
            <div className={styles.campoform}>    
                <input type="password" className ={styles.userform} name="name" placeholder= "Repita a nova senha"/>         
            </div>

            <Link to="/dashboard" className={styles.text2}>
                <div className={styles.button}>
                    <p>Confirmar</p>
                </div>  
             </Link>
              


         </div>
            
        <Onda1 className={styles.onda1}/>
        <Onda2 className={styles.onda2}/>
        <div className={styles.linha1}>
            <img src={Linha1}/> 
        </div>
     </div>
    </>
    )
}

export default AlterarSenhaAcesso1;
