import { firestoreClient } from '../data/firebase'
import Card from '../components/Card'
import Head from 'next/head'

export const getStaticProps = async () => ({
  props: {
    writing: await firestoreClient
      .collection('posts')
      .get()
      .then((snap) => snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      .then((writing) => writing.sort((a, b) => a.date.localeCompare(b.date))),
  },
})

const WritingPage = ({ writing }) => (
  <>
    <Head>
      <title>Writing | Brennan Colberg</title>
    </Head>
    {writing?.map(({ title, subtitle, id, date }, i) => (
      <Card
        key={i}
        title={title}
        text={subtitle}
        color="neutral"
        links={[{ href: `/writing/${id}`, text: 'read' }]}
        tags={[
          {
            text: date,
            color: 'neutral',
          },
        ]}
      />
    ))}
  </>
)

export default WritingPage
