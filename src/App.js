import React,{useEffect, useState} from 'react';
import Menu from './componentes/bar/topo';
import Tips from './componentes/content/body';
//import Login from './componentes/_partials/card-login';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import dia from './_files/images/dia.jpg'
import entardecer from './_files/images/teste.jpg'
import tarde from './_files/images/tarde.jpg'
import noite from './_files/images/noite.jpg'
import styled from 'styled-components';
const Fundo = styled.div`
  background: green;
  height:700px;
  .previousButton svg polygon,.nextButton svg polygon{
    display:none;
  }
  .fundo{
    position:absolute;
    width:100%;
    height:700px;
    z-index:88;
    background: #4133BD;
  background: -webkit-radial-gradient(top left, #4133BD, #BD1F91);
  background: -moz-radial-gradient(top left, #4133BD, #BD1F91);
  background: radial-gradient(to bottom right, #4133BD, #BD1F91);
  opacity:.4;
  }
  .center{
    text-align:center;
    width:550px;
    color:#fff;
    margin-right:100px;
    h1{
      font-size:40px;
      text-transform:uppercase;
    }
  }

  .slide:nth-child(1){
    background-image:url(${entardecer});
  }
  .slide:nth-child(2){
    background-image:url(${dia});
  }
  .slide:nth-child(3){
    background-image:url(${tarde});
  }
  .slide:nth-child(4){
    background-image:url(${noite});
  }
  .pics{
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
  }r:1px solid red;
  }
`;
export default function App() {
  const [cor,setCor]=useState('');
  const [fixed,setFixed]=useState('');
  const alteraScroll=()=>{
    if(document.documentElement.scrollTop>=104){
      setFixed('fixed');
      if(document.documentElement.scrollTop>=584)
        setCor('color1');
      else
        setCor('');
    }else  
      setFixed('');
  }
  useEffect(() => {
    window.onscroll=()=>{
      alteraScroll();
      console.log(document.documentElement.scrollTop);
    }
  })
  return (
    <Fundo>
      <Menu myColor={cor} isFixed={fixed}/>
      <div className="fundo"></div>
      <Slider autoplay={7000} className="slider">
        <div className="pics" >
          <div className="center">
            <h1>Cuidamos dos teus swag</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </div>
        </div>
        <div className="pics" >
          <div className="center">
            <h1>Cuidamos dos teus swag</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </div>
        </div>
        <div className="pics" >
          <div className="center">
            <h1>Cuidamos dos teus swag</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </div>
        </div>
        <div className="pics" >
          <div className="center">
            <h1>Cuidamos dos teus swag</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </div>
        </div>
      </Slider>
      <Tips/>
    </Fundo>
  );
}
/*
      <Login />

  background: #8FE67C;
  background: -webkit-radial-gradient(bottom left, #8FE67C, #1C93BA);
  background: -moz-radial-gradient(bottom left, #8FE67C, #1C93BA);
  background: radial-gradient(to top right, #8FE67C, #1C93BA);
.custom-shape-divider-top-1605407370 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1605407370 svg {
    position: relative;
    display: block;
    width: calc(152% + 1.3px);
    height: 172px;
}

.custom-shape-divider-top-1605407370 .shape-fill {
    fill: #FFFFFF;
}
CO

      <div class="custom-shape-divider-top-1605407370">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
        </svg>
      </div>
*/