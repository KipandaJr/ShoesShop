import React from 'react';
import styled from 'styled-components';
import Nike from '../../_files/icon/nike.png'
import Adidas from '../../_files/icon/adidas.png'
import Gucci from '../../_files/icon/gucci.png'

const Fundo=styled.div`
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

const Tip=styled.div`
    margin-left:10px;
    width:250px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
    h1{
        margin:0;
        font-size:20px;
        color:#4133BD;
        font-weight:400;
    }
    p{
        text-align:center;
        margin-top:10px;
    }
`;
const Marketing=()=>{
    return(
        <Fundo>
            <Tip>
                <img src={Nike} alt="Nike"/>
                <h1>Qualidade, você merece!</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim, quibusdam at eos sequi modi iste sed cum voluptatum nobis, quasi possimus perferendis voluptatibus nostrum dolor quas temporibus aliquam reprehenderit?
                </p>
            </Tip>
            <Tip>
                <img src={Adidas} alt="Nike"/>
                <h1>Qualidade, você merece!</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim, quibusdam at eos sequi modi iste sed cum voluptatum nobis, quasi possimus perferendis voluptatibus nostrum dolor quas temporibus aliquam reprehenderit?
                </p>
            </Tip>
            <Tip>
                <img src={Gucci} alt="Nike"/>
                <h1>Qualidade, você merece!</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim, quibusdam at eos sequi modi iste sed cum voluptatum nobis, quasi possimus perferendis voluptatibus nostrum dolor quas temporibus aliquam reprehenderit?
                </p>
            </Tip>
        </Fundo>
    );
};

export default Marketing;