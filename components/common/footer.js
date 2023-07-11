import footer from "../../styles/components/common/footer.module.scss";
import utils from "../../styles/utils.module.scss";

const Footer = () => {
  return (
    <div className={footer.footer}>
      <small className={`${footer.footer_copyRight} ${utils.textLogo}`}>
        © 2023 タケノコの部屋
      </small>
    </div>
  );
};

export default Footer;
