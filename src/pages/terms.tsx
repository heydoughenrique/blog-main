import Head from 'next/head'

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { RichText } from 'prismic-dom'
import styles from './terms.module.scss'

type Terms = {
  slug: string,
  title: string,
  updatedAt: string,
  fullcontent: string,
}

interface TermsProps {
  terms: Terms[]
}

export default function TermsService({ terms }: TermsProps) {
  return (
    <>
      {terms.map(terms => (
        <>
          <Head>
            <title>{terms.title} | Strides Digital</title>
          </Head>
          <main className={styles.container}>
            <article className={styles.terms}>
              <h1>{terms.title}</h1>
              <time>Updated on {terms.updatedAt}</time>
              <div
                className={styles.termsContent}
                dangerouslySetInnerHTML={{ __html: terms.fullcontent }} />
            </article>
          </main>
        </>

      ))}

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'terms_of_service_2')
  ], {
    fetch: ['terms_of_service_2.title', 'terms_of_service_2.termscontent'],
    pageSize: 100,
  })

  const terms = response.results.map(term => {
    return {
      slug: term.uid,
      title: RichText.asText(term.data.title),
      updatedAt: new Date(term.last_publication_date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      fullcontent: RichText.asHtml(term.data.termscontent),

    }

  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {
      terms
    },
    revalidate: 10,
  }

}
