export default function DevelopersLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Our skills</h1>
            {children}
        </div>
    )
}