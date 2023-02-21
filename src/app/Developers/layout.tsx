export default function DevelopersLayout ({
  children
}: {
  children: React.ReactNode 
}) {
  return (
  <div style={{textAlign: 'center'}}>
    <h1>We are Shifters</h1>
      {children}
    </div>
  )
}