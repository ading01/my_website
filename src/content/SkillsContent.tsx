import SkillBar from "../components/SkillBar/SkillBar";
import CircularProgress from "../components/CircularBar/CircularProgress";

function SkillsContent() {
  return (
    <div>
      <SkillBar label="HTML" percentage={90} />
      <SkillBar label="JavaScript" percentage={90} />
      <SkillBar label="Python" percentage={90} />
      <CircularProgress size={150} strokeWidth={10} percentage={75} />
    </div>
  );
}

export default SkillsContent;
