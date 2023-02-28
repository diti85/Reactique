import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"



const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width:50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Reactique.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores autem voluptatum tekomr.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Related Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms and Services</ListItem>
            </List>
        </Center>
        <Right>
            
            <Title>Contact</Title>
            <ContactItem ><Room style = {{marginRight:"10px"}}/>
                12101 Sterling University Ln, Orlando, 32826
            </ContactItem>
            <ContactItem><Phone style = {{marginRight:"10px"}}/>
                +1 561-455-6227
            </ContactItem>
            <ContactItem><MailOutline style = {{marginRight:"10px"}}/>
                contact@reactique.com
            </ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>

    </Container>
  )
}

export default Footer