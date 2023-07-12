import Link from "next/link";
import globalNavi from "../../styles/components/common/globalNavigation.module.scss";
import utils from "../../styles/utils.module.scss";

const GlobalNavigation = () => {
  return (
    <div className={globalNavi.globalNavi}>
      <ul className={globalNavi.globalNavi_list}>
        <li className={`${globalNavi.globalNavi_list_item} ${utils.textL}`}>
          <Link href="/about">自己紹介</Link>
        </li>
        <li className={`${globalNavi.globalNavi_list_item} ${utils.textL}`}>
          <Link href="/work">制作物</Link>
        </li>
        <li className={`${globalNavi.globalNavi_list_item} ${utils.textL}`}>
          <Link href="/blog">技術ブログ</Link>
        </li>
      </ul>
    </div>
  );
};

export default GlobalNavigation;
