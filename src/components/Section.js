 import React from 'react'
import styled from 'styled-components'

function Section({tittle,description,leftbtnText,rightbtnText,backgroundImg}) {

    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{tittle} </h1>
                <p>{description}</p>
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>
                        {leftbtnText}
                    </LeftButton>
                    { rightbtnText &&
                    <RightButton>
                    {rightbtnText}  
                    </RightButton>
                      }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Button>
        </Wrap>
    )
} 

export default Section

const Wrap = styled.div`
 width:100vw;
 height:100vh;
 background-size:cover;
 background-position:center;
 background-repeat:no-repeat;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
background-image:${props=>`url("/images/${props.bgImage}")`}
 `
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
@media(max-width:768px){
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px ;
opacity:0.85s;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin-top:40vh;
margin:8px;
`
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65s;
color:black;

`


const DownArrow = styled.img`
height:40px;
margin-top:20px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`
const Button = styled.div`

`