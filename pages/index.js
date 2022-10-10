import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <p className={utilStyles.headingMd}>Koki is a developer</p>
      </section>
      <section>
        <h2>✍ Blog by an enginner</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  alt={`${id}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a href='' className={utilStyles.boldText}>
                  {title}
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
