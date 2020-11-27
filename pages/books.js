import { firestoreClient } from '../data/firebase'
import Card from '../components/Card'
import Head from 'next/head'

const TITLE_PREFIXES_REGEX = /^(The )?(.+)$/

export const getStaticProps = async () => ({
  props: {
    books: await firestoreClient
      .collection('books')
      .get()
      .then((snap) => snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      .then((books) =>
        books.sort((a, b) =>
          a.title
            .match(TITLE_PREFIXES_REGEX)[2]
            .localeCompare(b.title.match(TITLE_PREFIXES_REGEX)[2])
        )
      ),
  },
})

const BooksMenu = ({ books }) => (
  <>
    <Head>
      <title>Book List | Brennan Colberg</title>
    </Head>
    {books.map((book, i) => (
      <Card
        title={book.title}
        text={book.subtitle}
        color="neutral"
        links={[
          book.summary?.length && {
            href: `/books/${book.id}/notes`,
            text: 'notes',
          },
          book.review && {
            href: book.review,
            text: 'review',
          },
          book.link && { href: book.link, text: 'buy' },
        ].filter((x) => x)}
        tags={[
          ...book.authors.map((author) => ({ text: author })),
          { text: book.year },
        ]}
        status={book.status}
      />
    ))}
  </>
)

export default BooksMenu
