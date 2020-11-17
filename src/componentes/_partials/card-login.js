import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import login from '../../_files/images/fundo.jpg';

const Fundo = styled.div`
    width: 260px;
    height: 300px;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
    z-index:90;
    margin-left:70px;
    .movie {
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(-130px);
        -moz-transform: translateZ(-130px);
        transform: translateZ(-130px);
        -webkit-transition: -webkit-transform 350ms;
        -moz-transition: -moz-transform 350ms;
        transition: transform 350ms;
    }
    .movie:hover {
        -webkit-transform: rotateY(-78deg) translateZ(20px);
        -moz-transform: rotateY(-78deg) translateZ(20px);
        transform: rotateY(-78deg);
    }
    .movie .poster,.movie .info {
        width: 100%;
        height: 100%;
        background-color: #fff;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        padding-bottom:50px;
    }

    .movie .poster {
        -webkit-transform: translateZ(130px);
        -moz-transform: translateZ(130px);
        transform: translateZ(130px);
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow:2px 3px 3px rgba(0,0,0,.4) !important;
    }
    
    .movie .info {
        -webkit-transform: rotateY(90deg) translateZ(130px);
        -moz-transform: rotateY(90deg) translateZ(130px);
        transform: rotateY(90deg) translateZ(130px);
        border: 1px solid #b8b5b5;
        font-size: 0.75em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-center:center;
    }

    .movie:hover::after {
        box-shadow: 20px -5px 50px rgba(0, 0, 0, 0.3);
    }

    .movie .poster {
        box-shadow: inset 0px 0px 40px rgba(255, 255, 255, 0);
    }

    .movie:hover .poster {
        box-shadow: inset 300px 0px 40px rgba(255, 255, 255, 0.8);
    }

    .movie .poster {
        background-image: url(${login});
        background-size:cover;
        color: #dc12ffb3;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        text-align:center;
    }

    .movie .poster h1{
        margin-bottom:0;
    }
    .movie .poster h3{
        margin-bottom:10px;
        margin-top:10px;
    }
`;
const Letreiro = styled.div`
    padding:10px;
    color:#4133BD;
    text-align:center;
    text-transform:uppercase;
    font-size:25px;
    font-weight:100;
    position:relative;
    & h2{
        -webkit-text-emphasis-style: 'open';
        font-weight:100;
        margin-bottom:5px;
        margin-top:5px;
    }
    @media(max-width:800px){
        font-size:20px;
    }
`;
const cardLogin = () => {
    return (
        <Fundo>
            <div className="movie">
                <div className="poster" >
                    <Button color="primary"  style={{borderRadius:'40px', width:'80%',backgroundColor: '#4133BD', color: '#fff', padding: '10px' }}>
                        Fazer login
                    </Button>
                </div>
                <div className="info">
                <Letreiro>
                    <h2>Login</h2>
                    <TextField margin="dense" id="name"  label="Nome de usuário" type="text" fullWidth />
                    <TextField margin="dense" id="name"  label="Password" type="password" fullWidth />
                    <Button color="primary"  style={{ backgroundColor: '#4133BD', color: '#fff', padding: '10px' }} fullWidth>
                        Logar
                    </Button>
                    <Button color="primary"  style={{ marginTop:'10px',backgroundColor: '#BD1F91', color: 'white', padding: '10px' }} fullWidth>
                        Criar uma conta
                    </Button>
                </Letreiro>
                </div>
            </div>
        </Fundo>
    );
};

export default cardLogin;