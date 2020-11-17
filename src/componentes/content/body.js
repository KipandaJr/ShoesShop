import React from 'react';
import styled from 'styled-components';
import Marketing  from './marketing';
import Publish  from './publish';
import Montra  from './montra';
import Login from './login';

const Fundo=styled.div`
    position:absolute;
    width:80%;
    top:650px;
    background:#fff;
    left:10%;
    z-index:92;
    box-shadow:2px 2px 10px rgba(0,0,0,.3);
`;
const Body=()=>{
    return (
        <Fundo>
            <Marketing/>
            <Publish/>
            <Montra/>
            <Login/>
        </Fundo>
    );
};

export default Body;