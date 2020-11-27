import Card from '../components/Card'
import Head from 'next/head'
import { multipleStaticProps } from '../helpers/static-rendering'

const TITLE_PREFIXES_REGEX = /^(The )?(.+)$/

export const getStaticProps = multipleStaticProps({
  type: 'book',
  sort: (a, b) =>
    a.title
      .match(TITLE_PREFIXES_REGEX)[2]
      .localeCompare(b.title.match(TITLE_PREFIXES_REGEX)[2]),
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
            href: '/books/[bookId]/notes',
            as: `/books/${book.id}/notes`,
            text: 'notes',
          },
          book.quotes?.length && {
            href: '/books/[bookId]/quotes',
            href: `/books/${book.id}/quotes`,
            text: 'quotes',
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
