import AnimatedText from "../typography/AnimatedText";
import { JOB_TITLE_TEXTS } from "@/app/util/constants";

function Header() {
  return (
    <header>
      <h1>
        <AnimatedText texts={JOB_TITLE_TEXTS} />
      </h1>
    </header>
  );
}

export default Header;
