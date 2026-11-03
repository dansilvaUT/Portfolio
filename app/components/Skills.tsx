import { JSX } from "react";
import { skillsObj } from "../utils";

const Skills = (): JSX.Element => {
  const skills = Object.entries(skillsObj);
  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {skills.map(([name, { icon }]) => (
        <li key={name}>
          <i className={`${icon} colored text-6xl md:text-[5rem]`}></i>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
