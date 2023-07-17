import Link from "next/link";
import globalNavi from "../../styles/components/common/globalNavigation.module.scss";
import utils from "../../styles/utils.module.scss";
import { useRouter } from "next/router";

const GlobalNavigation = () => {
  const router = useRouter();

  const paths = [
    { id: "/about", str: "自己紹介" },
    { id: "/work", str: "制作物" },
    { id: "/blog", str: "技術ブログ" },
  ];

  return (
    <div className={globalNavi.globalNavi}>
      <ul className={globalNavi.globalNavi_list}>
        {paths.map((path) => {
          return (
            <li
              key={path.id}
              className={`${globalNavi.globalNavi_list_item} ${utils.textL} ${
                router.pathname == path.id ? globalNavi.selected : ""
              }`}
            >
              <Link href={path.id}>{path.str}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GlobalNavigation;
