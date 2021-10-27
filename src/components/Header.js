import React, { useState } from 'react'
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/slices/carSlice";
import { useSelector } from 'react-redux';

function Header() {

    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </a>

            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>

                <CustomMenu onClick={() => setburgerStatus(true)} >
                    <a href="#">Menu</a>
                </CustomMenu>

            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setburgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a> </li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-In</a> </li>
                <li><a href="#">Cybertruck</a> </li>
                <li><a href="#">Roadster</a> </li>
                <li><a href="#">Semi</a> </li>
                <li><a href="#">Charging</a> </li>
                <li><a href="#">Powerwall</a> </li>
                <li><a href="#">Commercial Energy</a> </li>
                <li><a href="#">Utilities</a> </li>
                <li><a href="#">Find Us</a> </li>
                <li><a href="#">Investor Relations</a> </li>
            </BurgerNav>

        </Container>
    )
}

export default Header


const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 5px 20px; 
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }

    a:hover {
        background: #b6b5b52d;
        border-radius: 10px;
        transition: color .33s ease; 
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        margin-right: 20px;
    }
`

const CustomMenu = styled.div`
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    padding: 25px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ?
        'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s;

    li {
        margin: 7.5px;
        padding: 7.5px;
        cursor: pointer;
    }

    li:hover {
        background: #b6b5b52d;
        border-radius: 8px;
        transition: 200ms linear; 

    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
