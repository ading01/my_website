import SkillBar from "../components/SkillBar/SkillBar";
import CircularLoadingBar from "../components/CircularBar/CircularLoadingBar";

function SkillsContent() {
  return (
    <div>
      <SkillBar label="HTML" percentage={90} />
      <SkillBar label="JavaScript" percentage={90} />
      <SkillBar label="Python" percentage={90} />
      <CircularLoadingBar progress={75} skill={"Typescript"} />
      <CircularLoadingBar progress={75} skill={"React"} />
      {/* <CircularLoadingBar
        color="#3498db"
        name="TypeScript"
        percentage={75} // 75% fill
        size={300} // 150px size for the loading bar
      />{" "} */}
    </div>
  );
}

export default SkillsContent;
