import React from "react";
import styles from './ModalEditarProdutos.module.css';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';

const Modal =({ onClose = ()=>{} } ) =>{

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

        <h1 className={styles.textPrincipal}> Editar Produtos</h1>

            <div className={styles.content}> 
            <form action="" method="post">
                <div className={styles.elemento}>
                <label for="Nome">Nome do Produto:
                
                </label>
                    <input type="text" className ={styles.Nome} name="Nome" id="nome" />
                </div>



                <div className={styles.elemento}>
                <label for="Image">Fazer upload de imagem
                
                </label>
                    <input type="file" className ={styles.arquivo} name="Image" id="image" title="ads" accept="image/*" />
                </div>


                <div className={styles.elemento}>

                <label for="preco">Preço
                
                </label>
                <input type="number" min="0.00" name="preco" className ={styles.preco} max="10000.00" step="0.01" />
                </div>


                <div className={styles.elemento}>

                <label for="estoque">Estoque
                
                </label>
                <input  type="number" min="0.00" name="Estoque" className ={styles.preco} max="10000.00" step="0.01" />
                </div>

                <div className={styles.elemento2}>

                <label for="estoque">Descrição 
                
                </label>
                     <textarea  className ={styles.textarea} rows="5" cols="33" value="123"> </textarea> 
                </div>

            </form>

                <input className={styles.button} type="submit"  value="Editar"  onClick={onClose} />

            </div>
        </div>


    </div>
    );
};


export default Modal;