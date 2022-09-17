import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import styles from '../styles/Home.module.css';


const NFT: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Navbar></Navbar>
                
            </main>
        </div>
    );
}

export default NFT;