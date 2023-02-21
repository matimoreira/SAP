export default interface SkillProps {
    _id : number,
    name: string,
    tag: "error" | "default" | "primary" | "secondary" | "success" | "warning" | "gradient" | undefined,
    isActive: boolean
}