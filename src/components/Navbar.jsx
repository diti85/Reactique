import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
    ${mobile({height:"50px"})}
    height:60px;
`
const Wrapper = styled.div`
display:flex;
padding:10px 20px;
justify-content:space-between;
${mobile({padding:"10px 0px"})}
align-items:center;`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.span`
font-size:14px;
${mobile({display:"none"})}
cursor:pointer;
`

const SearchContainer = styled.div`
display:flex;
margin-left:25px;
align-items:center;
border : 0.5px solid lightgray; 
padding:5px;`

const Input = styled.input`
    ${mobile({width:"50px"})}
    border:none;
`

const Logo = styled.h1`
    ${mobile({fontSize:"24px"})}
    font-weight:bold;
    `
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex:2, justifyContent:"center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({fontSize:"12px"})}
    ${mobile({marginLeft:"10px"})}
`
const Center = styled.div`
flex:1;
text-align: center;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/> <Search style={{color:"gray, fontSize: 16"}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>Reactique</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent = {4} color = "primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar