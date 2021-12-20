import React, {useState} from 'react';
import styles from './PerguntaseRespostas.module.css';
import {Link} from 'react-router-dom';
import  Logo from '../Assets/Home/Logo.png';
import  LogoIF from '../Assets/Dashboard/if.png';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';
import Menusup from './Menusup';
import Modal from './ModalPerguntaseRespostas';


const PerguntaseRespostas = () => {

    document.body.style.backgroundColor = '#F5F8FF';

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModalVisible = (isVisible)=>{
        console.log(isVisible); 
        setIsModalVisible(isVisible);
    };

    

    return (
    <>
       <Menusup/>
       
       <div className = {styles.btnadicionar} onClick={()=>handleModalVisible(true)}>
            Adicionar uma pergunta
        </div>

        <div className={styles.container}>
            <h1 className={styles.text1}>
                Perguntas e Respostas
            </h1>
        </div>

        {isModalVisible ? 
                    (<Modal onClose = {()=> handleModalVisible(false)}>        
        </Modal>): null}

        <Link to="/dashboard" className={styles.text2}> 
            <div className={styles.voltar}>
                    <div className={styles.seta}>
                      <Seta/>
                    </div>
                    <div className = {styles.textovoltar}>
                       <p>Voltar para a Home</p>
                    </div>
            </div>
        </Link>


        <div className={styles.tabela}>
            <table className={styles.table2} cellpadding="16" margin="2">
                <tr className={styles.linha1table}>
                    <td className={`${styles.coluna1} ${styles.title}`}>Pergunta </td> 
                    <td className={`${styles.coluna2} ${styles.title}`}>Resposta</td>
                    <td className={`${styles.coluna3} ${styles.title}`}>Popularidade</td>
                    <td className={`${styles.coluna4} ${styles.title}`}></td>
                </tr>

                <tr className={styles.linha2table}>
                    <td className={styles.coluna1}>Qual o endereço da loja?</td> 
                    <td className={styles.coluna2}>Rua xxxxxxx, n 00, Centro</td>
                    <td className={styles.coluna3}>500</td>
                    <td className={styles.coluna4}>...</td>
                </tr>
            </table>
        </div>


        
    </>
    )
}

export default PerguntaseRespostas;