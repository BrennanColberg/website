import ReactMarkdown from 'react-markdown'
import MetaTags from '../../../components/MetaTags'
import {
  singleStaticPaths,
  singleStaticProps,
} from '../../../helpers/static-rendering'

export const getStaticPaths = singleStaticPaths('post')
export const getStaticProps = singleStaticProps('post')

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
