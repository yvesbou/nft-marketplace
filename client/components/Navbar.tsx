import { FC, useEffect, useState } from "react"
import Link from "next/link";
import styled from "styled-components";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead } from "wagmi";
// import someAbi from "../abi/abi"


// const contractConfig = {
// 	addressOrName: '0x96788D3aA03B6afAE42F15c059934ac53094Aca8',
// 	contractInterface: someAbi.abi,
// };

const Navbar: FC = () => {
	// states

    return (
		<Container>
			<TitleNavbar>🕵️‍♀️ NFT Marketplace 🕵️‍♂️</TitleNavbar>
			<SubContainer>
				<ConnectButton />
			</SubContainer>
		</Container>)
}


const Container = styled.div`
	/* Layout */
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 1rem;
    margin-bottom: 16px
`

const SubContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
`

const TitleNavbar = styled.div`
	font-size: 30px;
    font-weight: 900;
`


export default Navbar;