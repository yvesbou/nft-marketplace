import Image from 'next/image';
import { useState } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import styled from "styled-components";



const NFT: NextPage = () => {
    
    const [selectedIconIndex, setSelectedIconIndex] = useState(0);

    // DAI="DAI" is possible since sept 2021
    enum CoinNames {
        DAI="DAI",
        USDC="USDC",
        ETHER="ETHER"
    }

    const coinNameToIndex = (coinName: string) => {
        switch (coinName) {
            case CoinNames.DAI:
                setSelectedIconIndex(0);
                break;
            case CoinNames.USDC:
                setSelectedIconIndex(1);
                break;
            case CoinNames.ETHER:
                setSelectedIconIndex(2);
                break;
        
            default:
                break;
        }
    }

    const svgs = [
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
            viewBox="0 0 444.44 444.44">
            <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"/>
            <path fill="#F5AC37" fill-rule="nonzero" d="M222.22 0c122.74,0 222.22,99.5 222.22,222.22 0,122.74 -99.48,222.22 -222.22,222.22 -122.72,0 -222.22,-99.49 -222.22,-222.22 0,-122.72 99.5,-222.22 222.22,-222.22z"/>
            <path fill="#FEFEFD" fill-rule="nonzero" d="M230.41 237.91l84.44 0c1.8,0 2.65,0 2.78,-2.36 0.69,-8.59 0.69,-17.23 0,-25.83 0,-1.67 -0.83,-2.36 -2.64,-2.36l-168.05 0c-2.08,0 -2.64,0.69 -2.64,2.64l0 24.72c0,3.19 0,3.19 3.33,3.19l82.78 0zm77.79 -59.44c0.24,-0.63 0.24,-1.32 0,-1.94 -1.41,-3.07 -3.08,-6 -5.02,-8.75 -2.92,-4.7 -6.36,-9.03 -10.28,-12.92 -1.85,-2.35 -3.99,-4.46 -6.39,-6.25 -12.02,-10.23 -26.31,-17.47 -41.67,-21.11 -7.75,-1.74 -15.67,-2.57 -23.61,-2.5l-74.58 0c-2.08,0 -2.36,0.83 -2.36,2.64l0 49.3c0,2.08 0,2.64 2.64,2.64l160.27 0c0,0 1.39,-0.28 1.67,-1.11l-0.68 0zm0 88.33c-2.36,-0.26 -4.74,-0.26 -7.1,0l-154.02 0c-2.08,0 -2.78,0 -2.78,2.78l0 48.2c0,2.22 0,2.78 2.78,2.78l71.11 0c3.4,0.26 6.8,0.02 10.13,-0.69 10.32,-0.74 20.47,-2.98 30.15,-6.67 3.52,-1.22 6.92,-2.81 10.13,-4.72l0.97 0c16.67,-8.67 30.21,-22.29 38.75,-39.01 0,0 0.97,-2.1 -0.12,-2.65zm-191.81 78.75l0 -0.83 0 -32.36 0 -10.97 0 -32.64c0,-1.81 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -26.39 32.22 0c1.8,0 2.5,0 2.5,-2.36l0 -26.11c0,-1.67 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -24.44c0,-1.53 0,-1.94 2.22,-1.94l29.86 0c2.08,0 2.64,0 2.64,-2.64l0 -74.86c0,-2.22 0,-2.78 2.78,-2.78l104.16 0c7.56,0.3 15.07,1.13 22.5,2.5 15.31,2.83 30.02,8.3 43.47,16.11 8.92,5.25 17.13,11.59 24.44,18.89 5.5,5.71 10.46,11.89 14.86,18.47 4.37,6.67 8,13.8 10.85,21.25 0.35,1.94 2.21,3.25 4.15,2.92l24.86 0c3.19,0 3.19,0 3.33,3.06l0 22.78c0,2.22 -0.83,2.78 -3.06,2.78l-19.17 0c-1.94,0 -2.5,0 -2.36,2.5 0.76,8.46 0.76,16.95 0,25.41 0,2.36 0,2.64 2.65,2.64l21.93 0c0.97,1.25 0,2.5 0,3.76 0.14,1.61 0.14,3.24 0,4.85l0 16.81c0,2.36 -0.69,3.06 -2.78,3.06l-26.25 0c-1.83,-0.35 -3.61,0.82 -4.03,2.64 -6.25,16.25 -16.25,30.82 -29.17,42.5 -4.72,4.25 -9.68,8.25 -14.86,11.94 -5.56,3.2 -10.97,6.53 -16.67,9.17 -10.49,4.72 -21.49,8.2 -32.78,10.41 -10.72,1.92 -21.59,2.79 -32.5,2.64l-96.39 0 0 -0.14z"/>
            </g>
        </svg>,
        <svg data-name="86977684-12db-4850-8f30-233a7c267d11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
            <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
            <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
            <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
        </svg>,      
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
        viewBox="0 0 784.37 1277.39">
         <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <g id="_1421394342400">
           <g>
            <polygon fill="#343434" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
            <polygon fill="#3C3C3B" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
            <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
            <polygon fill="#141414" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
            <polygon fill="#393939" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
           </g>
          </g>
         </g>
        </svg>

    ]
    


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Navbar></Navbar>
                <Container>
                <TopContainer>
                    <ImageContainer></ImageContainer>
                    <InputAndButtons>
                        <Title><h1>Make Offer to Owner</h1></Title>
                        {/* <Image height="40" width="40" src="/public/usd-coin-usdc-logo.svg"/>
                         */}
                        <Subcontainer>
                                <DropdownIcon>{svgs[selectedIconIndex]}</DropdownIcon>
                                <DropdownMenu onChange={(e)=>coinNameToIndex(e.target.value)}>
                                    <option value="DAI"> Dai</option>
                                    <option value="USDC"> USDC</option>
                                    <option value="ETHER"> Ether</option>                        
                                </DropdownMenu>
                                <OfferInputField type="number"></OfferInputField>
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
    // width: 100px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    text-align-last: end;
    padding-left: 8px;
    padding-right: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #F8F8F8;
    &:focus {
        outline: none;
        color: #000;
        background-color: lighten(#e3edf7, 50%);
    }
`

const DropdownIcon = styled.div`
    display: flex;
    flex-direction: row;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    margin-top: 4px;
    margin-bottom: 4px;
    // background-color: red;
`

const OfferInputField = styled.input`
    background-color: #e3edf7;
    margin-right: 16px;
    width: 200px;
    padding: 16px 32px;
    border-radius: 16px;
    font-size: 16px;
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
    color: white;
    background-color: black;
    max-width: 120px;
    font-size: 16px;
    padding: 16px;
	border-radius: 12px;
	border: transparent;
	letter-spacing: 0.1px;
	box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
	font-weight: 900;
	transition-duration: 0.3s;
	&:hover {
        transition: 0.3s ease-out;
        transform: scale(1.05) perspective(1px)
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