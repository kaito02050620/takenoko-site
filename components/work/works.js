import Link from "next/link";
import { works } from "../../post/post";
import WorkList from "./worklist";
import workStyle from "../../styles/components/work/work.module.scss";
import utils from "../../styles/utils.module.scss";

const Works = () => {
  return (
    <section className={`${workStyle.work}`}>
      <ul className={`${workStyle.work_wrapper}`}>
        {works.map((work) => {
          return (
            <li className={`${workStyle.work_item}`} key={work.title}>
              <div className={`${workStyle.work_image}`}>
                <img src={work.image} alt={work.title} />
              </div>
              <div className="">
                <h2 className={`${workStyle.work_title}`}>{work.title}</h2>
                <Link
                  className={`${utils.textS} ${workStyle.work_url}`}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {work.url}
                </Link>
              </div>
              <div className={`${workStyle.work_item_list}`}>
                <h3 className={`${workStyle.work_title}`}>使用技術</h3>
                <WorkList stack={work.stack} />
              </div>
              <div className={`${workStyle.work_item_list}`}>
                <h3 className={`${workStyle.work_title}`}>制作時間</h3>
                <p className={`${workStyle.work_text}`}>{work.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Works;
