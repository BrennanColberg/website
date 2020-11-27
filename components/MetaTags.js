import Head from 'next/head'

const MetaTags = ({ url, title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" key="t" content={title} />
    <meta name="description" key="d" content={description} />

    {/* OpenGraph / Facebook */}
    <meta property="og:type" key="og:ty" content="website" />
    <meta property="og:url" key="og:u" content={url} />
    <meta property="og:title" key="og:ti" content={title} />
    <meta property="og:description" key="og:d" content={description} />
    <meta property="og:image" key="og:i" content={image} />

    {/* Twitter */}
    <meta property="twitter:card" key="t:c" content="summary_large_image" />
    <meta property="twitter:url" key="t:u" content={url} />
    <meta property="twitter:title" key="t:t" content={title} />
    <meta property="twitter:description" key="t:d" content={description} />
    <meta property="twitter:image" key="t:i" content={image} />
  </Head>
)

export default MetaTags
