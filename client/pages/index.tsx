import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Hero></Hero>


        
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at ETH3 Berlin
        </a>
      </footer>
    </div>
  );
};

const SearchbarDescription = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export default Home;
