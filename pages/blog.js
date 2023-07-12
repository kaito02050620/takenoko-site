import Footer from "@/components/common/footer";
import GlobalNavigation from "@/components/common/globalNavi";
import Header from "@/components/common/header";
import Head from "next/head";
import blogS from "../styles/components/blog/blog.module.scss";

const blog = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
          rel="stylesheet"
        />
        <title>タケノコの自己紹介</title>
      </Head>
      <div className="global-container">
        <Header />
        <GlobalNavigation />
        <div className={blogS.notDone}>準備中です！</div>
        <Footer />
      </div>
    </>
  );
};

export default blog;
