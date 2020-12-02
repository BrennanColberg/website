import { firestoreClient } from '../data/firebase'

const EXISTING_CONTENT_REFRESH_DELAY = 60 // 1 minute
const NO_CONTENT_REFRESH_DELAY = 1 // 1 second

export const singleStaticPaths = () => async () => ({
  paths: [],
  fallback: 'blocking',
})

export const singleStaticProps = (type) => async (context) => {
  const snap = await firestoreClient
    .collection(type + 's')
    .doc(context.params[type + 'Id'])
    .get()
  return {
    props: {
      [type]: {
        id: snap.id,
        ...snap.data(),
      },
    },
    notFound: !snap.exists,
    revalidate: snap.exists
      ? EXISTING_CONTENT_REFRESH_DELAY
      : NO_CONTENT_REFRESH_DELAY,
  }
}

export const multipleStaticProps = ({ type, sort }) => async () => ({
  props: {
    [type + 's']: await firestoreClient
      .collection(type + 's')
      .get()
      .then((snap) =>
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })).sort(sort)
      ),
  },
  revalidate: EXISTING_CONTENT_REFRESH_DELAY,
})
