import React from 'react';
import styled from 'styled-components';
import MyLogin from '../_partials/card-login';

const Fundo=styled.div`
    width:100%;
    height:500px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #4133BD;
    background: -webkit-radial-gradient(top left, rgba(255,255,255,.5), #4133bd);
    background: -moz-radial-gradient(top left, #fff, #4133bd);
    background: radial-gradient(to top left, #fff, #4133bd);
    padding-bottom:20px;
    img{
        position:absolute;
        height:100%;
        z-index:15;
    }
    .content{
        color:#fff;
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
const Login=()=>(
    <Fundo>
        <MyLogin/>
        <div className="content">
            <h1>Se junte a gente</h1>
            <h2>faca parte da familia</h2>
            <h3>invision</h3>
            <h3>O que te falta?</h3>
            <span>faça o login agora mesmo, não percas tempo</span>
        </div>
    </Fundo>
);

export default Login;