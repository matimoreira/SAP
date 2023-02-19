import SkillProps from "./skillProps";

export default interface Dev_SkillsProps {
    _id: string,
    name: string,
    skills: string[],
    seniority: string,
    presentation: string,
    picture: string,
    email: string,
    isActive: boolean,
    dev_skills: SkillProps[]
}