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
                    <PriceAndButtons></PriceAndButtons>
                </TopContainer>
                <BottomContainer>
                    <Metadata>Metadata</Metadata>
                    <Description>Description</Description>
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
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: orange;
    width: 300px;
    height: 400px;
`

const PriceAndButtons = styled.div`
    display: flex;
    flex-direction: column;
`

const Metadata = styled.div`
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: orange;
    width: 300px;
    height: 300px;
`

const Description = styled.div`
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: orange;
    width: 800px;
    height: 300px;
`


export default NFT;