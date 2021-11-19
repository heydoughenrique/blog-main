import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import styles from './home.module.scss';
import { SliderPortfolio } from '../components/Slider';


interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Strides Digital </title>
      </Head>
      <main>
        <section className={styles.contentContainer}>
          <div className={styles.hero} >
            <span>👏 Hey, welcome and...</span>
            <h1>Stop Struggling with your website</h1>
            <p>Let us build & take care of your website.<br />Starting at £149 per month.</p>
            <Link href="/pricing">
              <button className="btn-primary">
                <a>Start now</a>
              </button>
            </Link>
          </div>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/image-strides.png'}
              alt="Girl coding"
              layout="fill"
            />
          </div>
        </section>

        {/* <section className="bgNeutral900">
          <div className={styles.sliderContainer}>
            <SliderPortfolio />
          </div>
        </section>

        <section>
          <div>
            <h2>What’s Included</h2>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h3>SEO</h3>
              <p>Don’t waste time trying to figure out SEO. We handle it for you. Keyword research, technical setup, local listing suggestions and more…</p>
              <a href="">Learn more</a>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Blog Ready</h3>
              <p>Share your expertise with our ready and easy to use blog. Drive traffic and attract more prospective customers in an inexpensive way.</p>
              <a href="">Learn more</a>
            </div>
            <div>
              <img src="" alt="" />
              <h3>Style Guide</h3>
              <p>Consistency is the most powerful tool for a memorable brand. We build those brand guidelines and then you can reuse them on all your channels.</p>
              <a href="">See example</a>
            </div>
          </div>
          <div>
            <h2>And more</h2>
            <div>

            </div>
          </div>
        </section>

        <section className="bgSecondary100">
          <div className={styles.contentContainer}>
            <div className={styles.imageContainerNext}>
              <Image
                className={styles.imageNext}
                src={'/images/vector1-strides.svg'}
                alt="Illustration of a person carrying ideas for a professional website design"
                layout="fill"
              />
            </div>

            <div className={styles.hero} >
              <h2>14-day money back guarantee</h2>
              <p>If within 14 days after the website publishing, you are not satisfied, we’ll refund your money.</p>
              <Link href="/pricing">
                <button className="btn-primary">
                  <a>Get started today</a>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bgNeutral100">
          <div className={styles.contentContainer}>
            <div className={styles.hero} >
              <h2>Cancel at anytime</h2>
              <p>We hate to see you go, but if you need to cancel your plan, it’s ok. No long contracts. All our plans are monthly basis. </p>
              <Link href="/pricing">
                <button className="btn-primary">
                  <a>Ok, let's do it!</a>
                </button>
              </Link>
            </div>

            <div className={styles.imageContainerNext}>
              <Image
                className={styles.imageNext}
                src={'/images/image2-strides.png'}
                alt="Woman agreeing with our professional website terms of service"
                layout="fill"
              />
            </div>
          </div>
        </section> */}
      </main>

    </>
  )
}