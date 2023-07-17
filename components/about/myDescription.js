import desc from "../../styles/components/about/description.module.scss";
import utils from "../../styles/utils.module.scss";

const MyDescription = () => {
  return (
    <section className={desc.desc}>
      <div className={desc.desc_image}>
        <img
          className={desc.desc_image_item}
          src="/images/takenoko.png"
          alt="takemoko"
        />
      </div>
      <p className={`${desc.desc_text} ${utils.textL}`}>
        はじめまして！<span>タケノコ</span>です！ <br />
        社内エンジニアさんから影響を受けて<span>プログラミング</span>
        を始めました！
        <br />
        <span>ワクワク</span>をモットーに楽しいものを沢山作りますよ！
        <br />
        好きな食べ物は、海鮮とカツ丼です。おススメのお店あれば教えてください！
        <br />
      </p>
    </section>
  );
};

export default MyDescription;
