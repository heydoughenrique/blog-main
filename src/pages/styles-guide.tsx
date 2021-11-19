import { Main } from 'next/document';
import Head from 'next/head'
import styles from './styles-guide.module.scss'

export default function StyleGuide() {
  return (
    <>
      <Head>
        <title>Styles Guide | Strides Digital</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.mainTitle}>
          <img src="" alt="" />
          <h1>Global Presets UI Style Guide</h1>
          <p>This global presets style guide is a great way to start a new web design project and keep brand consistency in our visual language.</p>
        </section>
        <section>
          <div>
            <h2>02.Typograph</h2>
            <p>In this part of the style guide, you’ll find the different text styles that were used throughout the website and others businnes channels. There’s a block code in case you want to know the font family name, size and others customization data.</p>
          </div>
          <div>
            <h1>h1.Heading01</h1>
            <h2>h2.Heading02</h2>
            <h3>h3.Heading03</h3>
            <h4>h4.Heading04</h4>
            <h5>h5.Heading05</h5>
            <h6>h6.Heading06</h6>
          </div>
        </section>
      </main>
    </>
  );
}