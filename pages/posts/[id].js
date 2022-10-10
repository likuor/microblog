import Layout from '../../components/Layout';
import { getAllPostsIds, getPostData } from '../../lib/post';

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: { postData },
  };
}

const Post = ({ postData }) => {
  console.log(postData);

  return <Layout>{postData.title}</Layout>;
};

export default Post;
