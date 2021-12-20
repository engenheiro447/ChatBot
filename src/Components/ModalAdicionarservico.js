import React from "react";
import styles from './ModalAdicionarProdutos.module.css';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';

const Modal5 =({ onClose = ()=>{} } ) =>{

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

        <h1 className={styles.textPrincipal}> Adicionar um Serviço</h1>

            <div className={styles.content}> 
            <form action="" method="post">
                <div className={styles.elemento}>
                <label for="Nome">Nome do Serviço:
                
                </label>
                    <input type="text" className ={styles.Nome} name="Nome" id="nome" />
                </div>



            <div className={styles.elemento}>
                <label for="Image" className={styles.espacamentolabel}>Fazer upload de imagem
                
                </label>
                    <input type="file" className ={styles.arquivo} name="Image" id="image" title="ads" accept="image/*" />
                </div>


                <div className={styles.elemento}>

                <label for="preco">Preço
                
                </label>
                <input type="number" min="0.00" name="preco" className ={styles.preco} max="10000.00" step="0.01" />
                </div>


                <div className={styles.elemento3}>

                <label for="tipo" className={styles.espacamentolabel}>Tipo
                
                </label>
                <select name="tipo">
                    <option>recorrente</option>
                </select>

                </div>

                <div className={styles.elemento3}>

                <label for="tipo" className={styles.espacamentolabel}>Categoria
                
                </label>
                <select name="tipo">
                    <option>recorrente</option>
                </select>

                </div>


            </form>

                <input className={styles.button} type="submit"  value="Editar"  onClick={onClose} />

            </div>
        </div>


    </div>
    );
};


export default Modal5;