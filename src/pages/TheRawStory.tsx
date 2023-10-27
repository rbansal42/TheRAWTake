import { textOnRed } from "../components";
import { About, Hero, Subscribe } from "../sections";

const TheRawStory = () => {
  return (
    <div>
      <div className="font-Avenir cursor-default items-center self-center text-center align-middle text-5xl leading-snug text-slateGrey">
        The RAW Story
      </div>
      {textOnRed({
        text: "Building Blocks. Governing Principles. Impactful Executions.",
      })}
    </div>
  );
};

export default TheRawStory;
