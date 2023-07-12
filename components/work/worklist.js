import workList from "../../styles/components/work/worklist.module.scss";
import utils from "../../styles/utils.module.scss";

const WorkList = ({ stack }) => {
  const joinStack = stack.join("、");

  return (
    <div className={`${workList.list} ${utils.textS}`}>
      <p>{joinStack}</p>
    </div>
  );
};

export default WorkList;
