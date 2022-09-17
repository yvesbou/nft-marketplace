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
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
`

const Title = styled.div`
    margin-bottom: 8px;
    margin-left: 32px;
    margin-top: 8px;
`

const DropdownAndInput = styled.div`

`

const Button = styled.div`

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