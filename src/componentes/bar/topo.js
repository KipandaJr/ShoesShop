import React from 'react';
import styled from 'styled-components';
import logo from '../../_files/images/logoW.png';
const Fundo = styled.div`
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:1s;
    position:absolute;
    z-index:99;
    width:1000px;
    left:170px;
    top:100px;
    padding-left:10px;
    padding-right:10px;
    border-radius:10px;
    background:#9c27b073;
    box-shadow:-1px 1px 13px 1px #0202028f;
    &.fixed{
        width:98%;
        position:fixed;
        padding-left:15px;
        padding-right:15px;
        top:0;
        left:0;
        background:none;
        box-shadow:none;
        border-radius:0px;
        transition:1s;
    }
    img{
        height:70%;
    }
    &.color1{
        background: #4133BD;
        background: -webkit-radial-gradient(top left, #4133BD, #BD1F91);
        background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
        background: radial-gradient(to bottom right, #4133BD, #BD1F91);
        
    }
    ul{
        color:#fff;
        display:flex;
        justify-content:space-between;
        text-decoration:none;
        list-style:none;
        width:300px;
        text-transform:uppercase;
        cursor:pointer;
        font-size:18px;
        li{
            padding:15px;
            transition:.2s;
        }
        li:hover{
            opacity:1;
            border-bottom:3px solid #fff; 
        }
    }
`;
const Menu = (props) => {

    return (
        <Fundo className={[props.myColor,props.isFixed]}>
            <img src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>Nossos Produtos</li>
            </ul>
        </Fundo>
    );
};

export default Menu;