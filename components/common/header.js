import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import header from "../../styles/components/common/header.module.scss";
import utils from "../../styles/utils.module.scss";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

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
            <Link
              href="https://github.com/kaito02050620"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className={header.header_menu_item_icon} />
            </Link>
          </li>
          <li className={header.header_menu_item}>
            <Link
              href="https://twitter.com/takenokoengin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className={header.header_menu_item_icon} />
            </Link>
          </li>
          <li className={header.header_menu_item}>
            <div
              className={`${header.header_hamburger_menu_bg} ${
                open == true ? header.open : ""
              }`}
              onClick={toggleMenu}
            ></div>
            <button
              className={`${header.header_hamburger} ${
                open == true ? header.open : ""
              }`}
              onClick={toggleMenu}
            >
              <span
                className={`${header.header_hamburger_line} ${
                  open == true ? header.open : ""
                }`}
              ></span>
              <span
                className={`${header.header_hamburger_line} ${
                  open == true ? header.open : ""
                }`}
              ></span>
              <span
                className={`${header.header_hamburger_line} ${
                  open == true ? header.open : ""
                }`}
              ></span>
            </button>
            <div
              className={`${header.header_hamburger_menu}  ${
                open == true ? header.open : ""
              }`}
            >
              <ul className={`${header.header_hamburger_guide} `}>
                <li
                  className={`${header.header_hamburger_guide_link} ${utils.text2L}`}
                >
                  <Link href="/about">自己紹介</Link>
                </li>
                <li
                  className={`${header.header_hamburger_guide_link} ${utils.text2L}`}
                >
                  <Link href="/work">制作物</Link>
                </li>
                <li
                  className={`${header.header_hamburger_guide_link} ${utils.text2L}`}
                >
                  <Link href="/blog">技術ブログ</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
