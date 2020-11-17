import React from 'react';
import styled from 'styled-components';
import girlSkate from '../../_files/images/girl-skate1.png'
import amountShoes from '../../_files/images/amount.png'

const Cards=styled.div`
    width:100%;
    height:400px;
    position:relative;
    display:flex;
    color:#fff;
    margin-bottom:120px;
    /*clip-path:polygon(76% 0%,100% 0%,27% 100%,0 100%);
    */
    background: #4133BD;
    background: -webkit-radial-gradient(top left, rgba(255,255,255,.5), #4133bd);
    background: -moz-radial-gradient(top left, #fff, #4133bd);
    background: radial-gradient(to top left, #fff, #4133bd);
    /*background:#162a33;*/
    .circulo{
        background: #4133BD;
        background: -webkit-radial-gradient(top left, #4133BD, #BD1F91);
        background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
        background: radial-gradient(to bottom right, #4133BD, #BD1F91);
        width:50%;
        height:100%;
        clip-path: circle(30% at 180px 45%);
    }
    img{
        width:360px;
        z-index:5;
        position:absolute;
        top:0;
    }
    .content{
        margin:auto;
        text-align:center;
        text-transform:uppercase;
        h1,h2,h3{
            margin-top:0;
            margin-bottom:10px;
            font-weight:lighter
        }
        h1{font-size:50px;}
    }
`;
const Fundo=styled.div`
    .right{
        flex-direction:row-reverse;
        background: #4133BD;
        background: -webkit-radial-gradient(top right,rgba(255,255,255,.5),#4133BD 90%);
        background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
        background: radial-gradient(to top left, #4133BD, #BD1F91);
        img{
            top:80px;
            right:40px;
        }
        .circulo{
            clip-path: circle(30% at 300px 45%);
        }
    }
`;
const Publish =()=>(
    <Fundo>
    <Cards>
        <div className="circulo"></div>
        <img src={girlSkate} alt="girlSkate"/>
        <div className="content">
            <h1>Calse um Invision & descubra o teu caminho</h1>
            <h2>Seja um de nós</h2>
            <h3>Seja você mesmo</h3>
            <span>Seja invision</span>

        </div>
    </Cards>
    <Cards className="right">
        <div className="circulo"></div>
        <img src={amountShoes} alt="amountShoes"/>
        <div className="content">
            <h1>Faça dinheiro!</h1>
            <h2>com a tua coleção</h2>
            <h3>só na invision</h3>
            <span>que o teu calçado corre atrás do teu dinheiro</span>

        </div>
    </Cards>
    </Fundo>
);

export default Publish;