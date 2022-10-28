import { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const [register, setRegister] = useState(true);
  const [skills, setSkills] = useState([
    {
      Skill: "Python",
      valueSkill: 0,
    },
    {
      Skill: "Javascript",
      valueSkill: 0,
    },
    {
      Skill: "Typescript",
      valueSkill: 0,
    },
    {
      Skill: "Html",
      valueSkill: 0,
    },
    {
      Skill: "Css",
      valueSkill: 0,
    },
    {
      Skill: "React",
      valueSkill: 0,
    },
    {
      Skill: "Angular",
      valueSkill: 0,
    },
    {
      Skill: "Node",
      valueSkill: 0,
    },
    {
      Skill: "Java",
      valueSkill: 0,
    },
  ]);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        register,
        setRegister,
        skills,
        setSkills,
      }}
    >
      {children}
    </Context.Provider>
  );
};
