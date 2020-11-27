import ReactMarkdown from 'react-markdown'
import MetaTags from '../../../components/MetaTags'
import { firestoreClient } from '../../../data/firebase'

export const getStaticPaths = async () => ({
  paths: await firestoreClient
    .collection('posts')
    .get()
    .then((snap) => snap.docs.map((doc) => ({ params: { postId: doc.id } }))),
  fallback: false,
})

export const getStaticProps = async (context) => ({
  props: {
    post: await firestoreClient
      .collection('posts')
      .doc(context.params.postId)
      .get()
      .then((snap) => ({ id: snap.id, ...snap.data() })),
  },
})

const WritingPostPage = ({ post }) => {
  return (
    <div className="prose">
      <MetaTags
        url={`https://brennancolberg.com/writing/${post.id}`}
        title={post.title}
        description={post.subtitle}
      />

      <h2>
        <span className="font-extrabold">{post.title}</span>
        {post.subtitle && (
          <>
            <br />
            <span className="font-medium">{post.subtitle}</span>
          </>
        )}
      </h2>

      {post.text && <ReactMarkdown source={post.text} />}
    </div>
  )
}

export default WritingPostPage
