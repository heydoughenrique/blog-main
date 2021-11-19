import Head from 'next/head'

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom'
import styles from './styles.module.scss'
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  image: string;
}

interface PostProps {
  posts: Post[]
}

export default function Home({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Blog | Strides Digital</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`}>
              <a key={post.slug}>
                <div>
                  <img src={post.image} />
                </div>
                <div>
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content', 'publication.image'],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      image: post.data.image.url,

    };
  });

  return {
    props: {
      posts
    }
  }

}
