import { firestoreClient } from '../../data/firebase'
import Header from '../../components/Header'
import Link from 'next/link'
import styles from '../../styles/BookList.module.scss'

const BooksMenu = ({ books }) => (
  <>
    <Header />
    <main>
      <h1>Here are notes on some of the books I've read</h1>

      <ul className={styles.bookList}>
        {books.map((book, i) => (
          <Link key={i} href="/books/[id]" as={`/books/${book.id}`} passHref>
            <a>
              <li>
                {book.title}
                {book.subtitle && `: ${book.subtitle}`}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </main>
  </>
)

export async function getStaticProps() {
  const snap = await firestoreClient.collection('books').get()
  const books = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return {
    props: { books },
  }
}

export default BooksMenu
