import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Koki';
export const siteTitle = 'Micro blog';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img
          src='/images/profile.png'
          alt='profile'
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
