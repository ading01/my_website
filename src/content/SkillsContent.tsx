import SkillBar from "../components/SkillBar/SkillBar";

function SkillsContent() {
  return (
    <div>
      <SkillBar label="HTML" percentage={90} />
      <SkillBar label="JavaScript" percentage={90} />
      <SkillBar label="Python" percentage={90} />
    </div>
  );
}

export default SkillsContent;
