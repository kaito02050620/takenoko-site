import Link from "next/link";
import home from "../../styles/components/home/home.module.scss";
import utils from "../../styles/utils.module.scss";

const menuItem = [
  { title: "自己紹介", url: "/about" },
  { title: "制作物", url: "/work" },
  { title: "技術ブログ", url: "/blog" },
];

const HomeMenu = () => {
  return (
    <main className={home.home}>
      <div className={home.home_wrapper}>
        {menuItem.map((item) => {
          return (
            <Link
              className={`${home.home_item} ${utils.text2L}`}
              key={item.title}
              href={item.url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default HomeMenu;
