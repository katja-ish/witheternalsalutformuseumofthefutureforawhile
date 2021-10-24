import Head from "next/head";
import Layout from "../components/Layout";
import HomeMain from "../components/templates/home/HomeMain/Index";

const title = "witheternalsalutformuseumofthefutureforawhile";
const description = "witheternalsalutformuseumofthefutureforawhile";

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>witheternalsalutformuseumofthefutureforawhile</title>
        <meta name="description" content="Our description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMain />
    </Layout>
  );
}
