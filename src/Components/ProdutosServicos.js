import React, {useState} from 'react';
import styles from './ProdutosServicos.module.css';
import Menusup from './Menusup';
import {Link} from 'react-router-dom';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';
import Modal from './ModalEditarProdutos';
import Modal2 from './ModalAdicionarProdutos';
import Modal4 from './modaleditarserv';
import Modal5 from './ModalAdicionarservico';

const ProdutosServicos = () => {

    document.body.style.backgroundColor = '#F5F8FF';
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);


    const [isModal3Visible, setIsModal3Visible] = useState(false);


    const [isModal4Visible, setIsModal4Visible] = useState(false);

    const handleModalVisible = (isVisible)=>{
        console.log(isVisible); 
        setIsModalVisible(isVisible);
    };


    const handleModal2Visible = (isVisible)=>{
        console.log(isVisible); 
        setIsModal2Visible(isVisible);
    };



    const handleModal3Visible = (isVisible)=>{
        console.log(isVisible); 
        setIsModal3Visible(isVisible);
    };


    const handleModal4Visible = (isVisible)=>{
        console.log(isVisible); 
        setIsModal4Visible(isVisible);
    };



    
    return (
    <>
       <Menusup/>

        <h1 className={styles.text1}>
            Produtos e Serviços
        </h1>

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


        <div className={styles.table}>
            <div className={styles.sup}>
                <h2>Produtos</h2>
                

                <div className={styles.botoes}>
                    <div className={styles.btn1 + ' ' + styles.btnedit} onClick={()=>handleModalVisible(true)}>
                    
                    

                        <p>Editar</p>
                    </div>
                    <div className={styles.btn1+ ' ' + styles.btnadc} onClick={()=>handleModal2Visible(true)}>
                        <p>Adicionar Produto</p>
                    </div>

                    <div className={styles.clear}></div>
                </div>
                <div className={styles.clear}></div>
            </div>

<div className={styles.containtable}>
            <table className={styles.table2}>
                <tr className={styles.linha1table}>
                    <td className={styles.coluna1}>Nome </td> 
                    <td className={styles.coluna2}>Imagem</td>
                    <td className={styles.coluna3}>Descrição</td>
                    <td className={styles.coluna4}>Preço</td>
                    <td className={styles.coluna5}>Estoque</td>
                    <td className={styles.coluna6}>Status</td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>
                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                
                
              
            </table>
</div>

        </div>

        {isModalVisible ? 
                    (<Modal onClose = {()=> handleModalVisible(false)}>        
        </Modal>): null}

        {isModal2Visible ? 
                    (<Modal2 onClose = {()=> handleModal2Visible(false)}>
                    
        </Modal2>): null}

        {isModal3Visible ? 
                    (<Modal4 onClose = {()=> handleModal3Visible(false)}>
                    
        </Modal4>): null}

        {isModal4Visible ? 
                    (<Modal5 onClose = {()=> handleModal4Visible(false)}>
                    
        </Modal5>): null}
        






        <div className={styles.table}>
        <div className={styles.sup}>
                <h2>Serviços</h2>

                <div className={styles.botoes}>
                    <div className={styles.btn1 + ' ' + styles.btnedit} onClick={()=>handleModal3Visible(true)}>
                        <p>Editar</p>
                    </div>
                    <div className={styles.btn1+ ' ' + styles.btnadc} onClick={()=>handleModal4Visible(true)}>
                        <p>Adicionar Produto</p>
                    </div>

                    <div className={styles.clear}></div>
                </div>
                <div className={styles.clear}></div>
            </div>

<div className={styles.containtable}>
            <table className={styles.table2}>
                <tr className={styles.linha1table}>
                    <td className={styles.coluna1}>Nome </td> 
                    <td className={styles.coluna2}>Imagem</td>
                    <td className={styles.coluna3}>Descrição</td>
                    <td className={styles.coluna4}>Preço</td>
                    <td className={styles.coluna5}>Tipo</td>
                    <td className={styles.coluna6s}>Qntd de planos</td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>
                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                <tr>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                    <td className={styles.elementotable}></td>
                </tr>

                
            
            </table>
</div>
        </div>

    
        


    </>
    )
}

export default ProdutosServicos;