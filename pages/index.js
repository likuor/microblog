import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyles.headingMd}>Koki is a developer</p>
      </section>
      <section>
        <h2>✍ Blog by an enginner</h2>
        <div className={styles.grid}>
          <article>
            <Link href='/'>
              <img
                src='/images/thumbnail01.jpg'
                alt=''
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href='/'>
              <a href='' className={utilStyles.boldText}>
                Title is here
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>October 6,2022</small>
          </article>
          <article>
            <Link href='/'>
              <img
                src='/images/thumbnail01.jpg'
                alt=''
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href='/'>
              <a href='' className={utilStyles.boldText}>
                Title is here
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>October 6,2022</small>
          </article>
          <article>
            <Link href='/'>
              <img
                src='/images/thumbnail01.jpg'
                alt=''
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href='/'>
              <a href='' className={utilStyles.boldText}>
                Title is here
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>October 6,2022</small>
          </article>
          <article>
            <Link href='/'>
              <img
                src='/images/thumbnail01.jpg'
                alt=''
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href='/'>
              <a href='' className={utilStyles.boldText}>
                Title is here
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>October 6,2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
