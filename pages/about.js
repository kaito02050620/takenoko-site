import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const about = () => {
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
          rel="stylesheet"
        />
        <title>タケノコの部屋</title>
      </Head>
      <div className="global-container">
        <Header />
        <div>
          <ul>
            <li>
              <Link href="/about">自己紹介</Link>
            </li>
            <li>
              <Link href="/work">制作物</Link>
            </li>
            <li>
              <Link href="/blog">技術ブログ</Link>
            </li>
          </ul>
        </div>
        <section>
          <div>
            <Image
              src="public/images/takenoko.png"
              width={64}
              height={64}
              alt="My avatar"
            />
          </div>
          <p>
            はじめまして！　タケノコです！ <br />
            社内エンジニアさんから影響を受けてプログラミングを始めました！
            <br />
            ワクワクをモットーに楽しいものを沢山作りますよ！
            <br />
            好きな食べ物は、海鮮とカツ丼です。おススメのお店あれば教えてください！
            <br />
          </p>
        </section>
        <section>
          <h2>スキル</h2>
          <div>
            <h3>プログラミング言語</h3>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>NNode.js</li>
            </ul>
          </div>
          <div>
            <h3>データベース</h3>
            <ul>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h3>その他</h3>
            <ul>
              <li>Git</li>
              <li>Sass</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default about;
