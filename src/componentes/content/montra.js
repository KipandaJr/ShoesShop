import React from 'react'
import styled from 'styled-components';
import shoes from '../../_files/icon/shoesOut.png'
import shoe1 from '../../_files/images/shoe-1.png'
import shoe2 from '../../_files/images/shoe-3.png'
import shoe3 from '../../_files/images/shoe-4.png'
import shoe4 from '../../_files/images/shoe-5.png'
import shoe5 from '../../_files/images/shoe-exemplo.png'
import Tilt from 'react-vanilla-tilt'
const Fundo=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding-bottom:20px;
`;
const Head=styled.div`
    text-align:center;
    color:#4133BD;
    padding-left:50px;
    padding-right:50px;
    h1{
        text-transform:uppercase;
        margin:0;
        font-weight:300;
    }
    p{
        color:#000;
    }
`;
const Body=styled.div`
    width:100%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    transform-style:preserve-3d;
    margin-bottom:40px;
    .box{
        position:relative;
        width:250px !important;
        height:300px !important;
        margin:40px;
        background:transparent !important;
        border-radius:20px !important;
        transform-style:preserve-3d;
        transition:.7s;
    }
    .box:hover{
        background:#232323 !important;
    }
    .box:hover::after{
        opacity:0.2;
        color:#ff00b8;
    }
    .box:hover::before{
        opacity:1;
        color:#ff00b8;
    }
    .box::before{
        content:'NIKE - air max';
        position:absolute;
        top:5px;
        font-size:25px;
        font-weight:900;
        font-style:italic;
        opacity:0.3;
        transition:.7s;
        font-weight:bold;
    }
    .box::after{
        transition:.7s;
        content:'INVISION';
        position:absolute;
        bottom:2px;
        font-size:1.8em;
        font-weight:900;
        font-style:italic;
        opacity:0.3;
    }

    .box .name{
        position:absolute;
        top:0;
        left:0;
        text-align:center;
        color:#fff;
        width:100%;
        transform-style:preserve-3d;
        transform:translate3d(0,0,75px);
        transition:.5s;
        opacity:0;
        z-index:10;
    }
    .box:hover .name{
        top:60px;
        left:-10px;
        opacity:1;
    }

    .box .buy{
        position:absolute;
        bottom:0;
        right:0px;
        transform-style:preserve-3d;
        transform:translate3d(-50%,0,75px);
        color:#fff;
        border-radius:30px;
        text-decoration:none;
        transition:.5s;
        opacity:0;
        z-index:10;
        padding:10px 25px;
        background:red;
        text-transform:uppercase;
    }
    
    .box:hover .buy,.box:hover .circle{
        bottom:30px;
        opacity:1;
        background: #4133BD;
        background: -webkit-radial-gradient(top left, #4133BD, #BD1F91);
        background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
        background: radial-gradient(to bottom right, #4133BD, #BD1F91);
        border:none;
    }
    .box .buy:hover{
        background:transparent;
        border:1px solid #fff;
    }
    .box .circle{
        position:absolute;
        top:50%;
        left:50%;
        width:150px;
        height:150px;
        border-radius:50%;
        transition:.5s;
        background: #4133BD;
        background: -webkit-radial-gradient(top left, #4133BD, #BD1F91);
        background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
        background: radial-gradient(to bottom right, #4133BD, #BD1F91);
        transform-style:preserve-3d;
        z-index:4;
        transform:translate3d(-50%,-50%,50px);
    }

    .box .produto{
        position:absolute;
        top:50%;
        left:50%;
        max-width:250px;
        transition:.5s;
        z-index:20;
        transform-style:preserve-3d;
        transform:translate3d(-50%,-50%, 50px);
    }
    .box:hover .produto{
        transform:translate3d(-50%,-50%, 150px);
    }
    .box .circle,.box .buy{
        border:2px solid #BD1F91;
        background:transparent;
    }
`;
const Montra=()=>(
    <Fundo>
        <Head>
            <img src={shoes} alt="Nike"/>
            <h1>Conheça a nossa montra</h1>
            <p>
                O que a invision não tem... nenhum outro lugar pode oferecer. Maravilhe-se com a miscelanêa de escolha de que podes fazer. Invisio não é uma marca, é um estilo de vida
            </p>
        </Head>
        <Body>
                <Tilt options={{speed:4000,max:360,perspective:10}} className="box">
                    <a href="_blank" className="buy">Compre agora</a>
                    <div className="circle"></div>
                    <img src={shoe1} className="produto" alt="teste"/>
                </Tilt>
                <Tilt options={{speed:4000,max:360,perspective:10}} className="box">
                    <a href="_blank" className="buy">Compre agora</a>
                    <div className="circle"></div>
                    <img src={shoe2} className="produto" alt="teste"/>
                </Tilt>
                <Tilt options={{speed:4000,max:360,perspective:10}} className="box">
                    <a href="_blank" className="buy">Compre agora</a>
                    <div className="circle"></div>
                    <img src={shoe3} className="produto" alt="teste"/>
                </Tilt>
                <Tilt options={{speed:4000,max:360,perspective:10}} className="box">
                    <a href="_blank" className="buy">Compre agora</a>
                    <div className="circle"></div>
                    <img src={shoe4} className="produto" alt="teste"/>
                </Tilt>
                <Tilt options={{speed:4000,max:360,perspective:10}} className="box">
                    <a href="_blank" className="buy">Compre agora</a>
                    <div className="circle"></div>
                    <img src={shoe5} className="produto" alt="teste"/>
                </Tilt>
        </Body>
        <Head>
            <h3>ver mais</h3>
            <p>
                vem descobrir o que mais podemos oferecer,
            </p>
        </Head>
    </Fundo>
);

export default Montra;