import skill from "../../styles/components/about/skill.module.scss";
import utils from "../../styles/utils.module.scss";
import {
  BiLogoGit,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaNode, FaSass } from "react-icons/fa";

const Skill = () => {
  return (
    <section className={`${skill.skill}`}>
      <h2 className={`${utils.text2L}`}>スキル</h2>
      <div>
        <h3 className={`${utils.textL} ${skill.skill_title}`}>
          プログラミング言語
        </h3>
        <ul className={`${skill.skill_list}`}>
          <li className={`${skill.skill_icon}`}>
            <BiLogoJavascript />
          </li>
          <li className={`${skill.skill_icon}`}>
            <BiLogoReact />
          </li>
          <li className={`${skill.skill_icon}`}>
            <FaNode />
          </li>
        </ul>
      </div>
      <div>
        <h3 className={`${utils.textL} ${skill.skill_title}`}>データベース</h3>
        <ul className={`${skill.skill_list}`}>
          <li className={`${skill.skill_icon}`}>
            <BiLogoMongodb />
          </li>
        </ul>
      </div>
      <div>
        <h3 className={`${utils.textL} ${skill.skill_title}`}>その他</h3>
        <ul className={`${skill.skill_list}`}>
          <li className={`${skill.skill_icon}`}>
            <BiLogoGit />
          </li>
          <li className={`${skill.skill_icon}`}>
            <FaSass />
          </li>
          <li className={`${skill.skill_icon}`}>
            <BiLogoTailwindCss />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
