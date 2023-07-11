import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import header from "../../styles/components/common/header.module.scss";
import utils from "../../styles/utils.module.scss";

const Header = () => {
  return (
    <header className={header.header}>
      <div className={header.header_container}>
        <Link href="/">
          <h1 className={`${header.header_logo} ${utils.textLogo}`}>
            タケノコの部屋
          </h1>
        </Link>
        <ul className={header.header_menu}>
          <li className={header.header_menu_item}>
            <Link href="https://github.com/kaito02050620">
              <AiFillGithub className={header.header_menu_item_icon} />
            </Link>
          </li>
          <li className={header.header_menu_item}>
            <Link href="https://twitter.com/takenokoengin">
              <AiFillTwitterCircle className={header.header_menu_item_icon} />
            </Link>
          </li>
          <li className={header.header_menu_item}>
            <Link href="https://twitter.com/takenokoengin">
              <AiFillTwitterCircle className={header.header_menu_item_icon} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
