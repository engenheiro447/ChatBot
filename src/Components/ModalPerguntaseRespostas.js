import React from "react";
import styles from './ModalPerguntaseRespostas.module.css';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';

const ModalPerguntaseRespostas =({ onClose = ()=>{} } ) =>{

    return (
    
    <div className={styles.modal}>

    <div className={styles.container}>
            
        <div className={styles.voltar} onClick={ onClose } >
                    <div className={styles.seta}>
                      <Seta/>
                    </div>
                    <div className = {styles.textovoltar}>
                       <p>Cancelar</p>
                    </div>
        </div>

        <h1 className={styles.textPrincipal}> Adicionar uma pergunta</h1>

            <div className={styles.content}> 
            <form action="" method="post">
                <div className={styles.elemento}>
                <label for="Nome">Pergunta
                
                </label>
                    <input type="text" className ={styles.Nome} name="Nome" id="nome" />
                </div>

                <div className={styles.elemento}>
                <label for="Nome">Resposta
                
                </label>
                    <input type="text" className ={styles.Nome} name="Nome" id="nome" />
                </div>




            </form>

                <input className={styles.button} type="submit"  value="Adicionar"  onClick={onClose} />

            </div>
        </div>


    </div>
    );
};


export default ModalPerguntaseRespostas;