const ReactMarkdown = require('react-markdown')

const Markdown = ({ text }) => <ReactMarkdown className="prose" source={text} />

export default Markdown
