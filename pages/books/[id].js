import { firestoreClient } from '../../data/firebase'
import Header from '../../components/Header'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

function authorsToText(authors) {
  if (authors.length === 0) return null
  if (authors.length === 1) return authors[0]
  if (authors.length === 2) return authors.join(' & ')
  return authors.join(', ')
}

const BookContent = ({ book }) => {
  const title = `${book.title} (${authorsToText(book.authors)}; ${book.year})`
  const url = `https://brennancolberg.com/books/${book.id}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />

        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
      </Head>
      <Header />
      <main>
        <h1>{book.title}</h1>
        {book.subtitle && <h2>{book.subtitle}</h2>}
        {book.authors && book.authors.length && (
          <h3>by {authorsToText(book.authors)}</h3>
        )}
        <hr />

        <ReactMarkdown source={book.text} />
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const snap = await firestoreClient
    .collection('books')
    .doc(context.params.id)
    .get()
  return {
    props: { book: snap.data() },
  }
}

export async function getStaticPaths() {
  const snap = await firestoreClient.collection('books').get()
  const books = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

  return {
    paths: books.map((book) => ({
      params: {
        id: book.id,
      },
    })),
    fallback: false,
  }
}

export default BookContent
