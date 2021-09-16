import React from 'react'
import styles from './Home.module.css';
import {ReactComponent as Ondas} from '../Assets/Home/Oval.svg';
import  Logo from '../Assets/Home/Logo.png';
import {ReactComponent as Robo} from '../Assets/Home/Robo.svg';
import  Linha from '../Assets/Home/linha1.png';
import  Linha2 from '../Assets/Home/linha2.png';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';
import {ReactComponent as User} from '../Assets/Home/user.svg';
import {ReactComponent as Pass} from '../Assets/Home/pass.svg';
import {Link} from 'react-router-dom';
const Home = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    return (
    <>
         <div className={styles.esq}>
           <img src={Logo} className={styles.logo} />
           <img src={Linha} className={styles.linha1} />
           <img src={Linha2} className={styles.linha2} />
            <div className={styles.controbo}>
                <Robo className={styles.robo}/>
            </div>
           
         </div><div className={styles.dir}>
            <Ondas className={styles.ondasup}/>
            <div className={styles.formlogin}>
            
                <div className={styles.voltar}>
                    <div className={styles.seta}>
                      <Seta/>
                    </div>
                    <div className = {styles.textovoltar}>
                        <p>Voltar para o site</p>
                    </div>
                </div>

                <div className={styles.textoprinc}>
                    <h1>Entre na sua conta</h1>
                    <h3>Olá, é muito bom ter você aqui! Obrigado pela confiança s2</h3>
                </div>

                <div className ={styles.formu}>
                <form>
                <div className ={styles.user}>
                   <div className={styles.icon}>
                        <User className={styles.iconuser}/>
                   </div>
                   <div className={styles.campoform}>
                       
                        <input type="text" className ={styles.userform} name="name" placeholder= "Insira o seu CPF"/>
                        
                   </div>
                </div>

                <div className ={styles.pass}>
                   <div className={styles.icon}>
                        <Pass className={styles.iconpass}/>
                   </div>
                   <div className={styles.campoform}>
                       
                        <input type="password" className ={styles.userform} name="name" placeholder= "Senha"/>
                        
                   </div>
                </div>

                <div className={styles.esq2}>
                <input type="checkbox" id="scales" name="scales" ></input>
                <label for="scales">Lembre-me</label>
                 
                </div>
                <div className={styles.dir2}>
                    <p>Perdeu a sua senha?</p>
                </div>
                <div className={styles.clear}></div>
            <Link to="/boasvindas" className={styles.text2}>
              
                <div className={styles.button}>  
                    <p>Acessar</p>  
                </div>
            </Link>
             </form>
            <div className={styles.criarconta}>
                <p>Ainda não possui uma conta?</p>
                <p>Entre em contato com a gente agora mesmo!</p>
             </div>      
                
                </div>


            </div>

         </div>
         <div className={styles.clear}></div>
    </>
    )
}

export default Home;
