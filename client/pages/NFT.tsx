import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import styled from "styled-components";



const NFT: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Navbar></Navbar>
                <Container>
                <TopContainer>
                    <ImageContainer></ImageContainer>
                    <InputAndButtons>
                        <Title><h1>Make Offer to Owner</h1></Title>
                        <Subcontainer>
                                <DropdownMenu>Dai</DropdownMenu>
                                <OfferInputField></OfferInputField>
                        </Subcontainer>
                            <Subcontainer>
                                <OfferButton>Make Offer</OfferButton>
                            </Subcontainer>
                    </InputAndButtons>
                </TopContainer>
                <BottomContainer>
                    <Metadata><Title><h1>Metadata</h1></Title></Metadata>
                    <Description><Title><h1>Description</h1></Title></Description>
                </BottomContainer>
                </Container>
            </main>
        </div>
    );
}

const SearchInputContainer = styled.input`
  background-color: #e3edf7;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 16px 32px;
  border-radius: 16px;
  
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;
  -webkit-box-shadow:inset 0 0 3px #111;
  -moz-box-shadow:inset 0 0 3px #111;
  box-shadow:inset 0 0 3px #111;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
    color: #000;
    background-color: lighten(#e3edf7, 50%);
  }

`

const Container = styled.div`
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TopContainer = styled.div`
    maxheight: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px;
`

const BottomContainer = styled.div`
    minheight: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px;
`

const ImageContainer = styled.div`
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    width: 300px;
    height: 400px;
`

const InputAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    justify-content: start;
    width: 70%;
`

const Title = styled.div`
    margin-bottom: 8px;
    margin-left: 32px;
    margin-top: 8px;
`

const Subcontainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    margin-left: 64px;
    margin-top: 16px;
`

const DropdownMenu = styled.select`
    margin-right: 32px;
    width: 150px;
    border: none;
    border-radius: 15px;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    &:focus {
        outline: none;
        color: #000;
        background-color: lighten(#e3edf7, 50%);
      }
`

const OfferInputField = styled.input`
    background-color: #e3edf7;
    margin-right: 16px;
    width: 200px;
    padding: 16px 32px;
    border-radius: 16px;
    
    display: block;
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    -webkit-appearance: none;
    transition: all 240ms ease-out;
    -webkit-box-shadow:inset 0 0 3px #111;
    -moz-box-shadow:inset 0 0 3px #111;
    box-shadow:inset 0 0 3px #111;
    border: none;
    background: transparent;

    &:focus {
        outline: none;
        color: #000;
        background-color: lighten(#e3edf7, 50%);
    }
    
`

const OfferButton = styled.button`
    max-width: 100px;
`

const Metadata = styled.div`
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    width: 300px;
    height: 300px;
`
    
const Description = styled.div`
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    width: 800px;
    height: 300px;
`


export default NFT;