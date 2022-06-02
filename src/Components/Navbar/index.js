import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import {Component} from "react";

class Navbar extends React.Component{
    render (){
        return(<>
            <Nav>
                <NavLink to="/">
                    <h1>Ethanos</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/create' activeStyle>
                        創建
                    </NavLink>
                    <NavLink to='/vote' activeStyle>
                        投票
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign up
                    </NavLink>
                    <NavBtn >
                        <NavBtnLink to='/sign-in'>Sign in</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>);
    }
}
export default Navbar;