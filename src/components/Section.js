import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'


function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    scroll-snap-align: start;
  
`

const ItemText = styled.div`
    z-index: 10;
    padding-top: 20vh;
    text-align: center;
 
    h1 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
}
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgb(18, 21, 26, 0.97);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: #FFFFFFA6;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;  
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    filter: invert(100%)
    
`

const Buttons = styled.div``