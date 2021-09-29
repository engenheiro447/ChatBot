import React from 'react'
import styles from './ProdutosServicos.module.css';
import Menusup from './Menusup';
import {Link} from 'react-router-dom';
import {ReactComponent as Seta} from '../Assets/Home/Seta.svg';


const ProdutosServicos = () => {

    document.body.style.backgroundColor = '#F5F8FF';
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
                    <div className={styles.btn1 + ' ' + styles.btnedit}>
                        <p>Editar</p>
                    </div>
                    <div className={styles.btn1+ ' ' + styles.btnadc}>
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








        <div className={styles.table}>
        <div className={styles.sup}>
                <h2>Serviços</h2>

                <div className={styles.botoes}>
                    <div className={styles.btn1 + ' ' + styles.btnedit}>
                        <p>Editar</p>
                    </div>
                    <div className={styles.btn1+ ' ' + styles.btnadc}>
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
                    <td className={styles.elementotable}>as</td>
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