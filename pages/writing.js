import Card from '../components/Card'
import Head from 'next/head'
import { multipleStaticProps } from '../helpers/static-rendering'

export const getStaticProps = multipleStaticProps({
  type: 'post',
  sort: (a, b) => a.date.localeCompare(b.date),
})

const WritingPage = ({ posts }) => (
  <>
    <Head>
      <title>Writing | Brennan Colberg</title>
    </Head>
    {posts?.map((post, i) => (
      <Card
        key={i}
        title={post.title}
        text={post.subtitle}
        color="neutral"
        links={[{ href: `/writing/${post.id}`, text: 'read' }]}
        tags={[
          {
            text: post.date,
            color: 'neutral',
          },
        ]}
      />
    ))}
  </>
)

export default WritingPage
