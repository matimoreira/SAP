export default function Home() {
  return (
    <>  
        <div style={{padding: '0px 24px'}}>
            <h1 style={{textAlign: 'center'}}>Easy Assigment Project</h1>
            <p style={{fontSize: '1.125rem'}}>Es un proyecto que utiliza el siguiente stack de tecnologias:</p>
            <ul>
                <li style={{fontSize: '1.125rem'}}>✅ Node</li>
                <li style={{fontSize: '1.125rem'}}>✅ Next.js 13</li>
                <li style={{fontSize: '1.125rem'}}>✅ NextUI</li>
                <li style={{fontSize: '1.125rem'}}>✅ MongoDB</li>
            </ul>
            <p style={{fontSize: '1.125rem'}}>Está destinado a hacer más sencilla la asignacion de proyectos.</p>
            <p style={{fontSize: '1.125rem'}}>Se espera que al asignar los perfiles de los desarrolladores que se necesiten en un proyecto, el sistema se capaz de buscar en la base de datos los desarrolladores que más se adecuen a los perfiles indicados.</p>
            <p style={{fontSize: '1.125rem'}}>Actualmente solo tiene un listado de Desarolladores junto con sus tres primeras skills y un listado de las skills disponibles ambos con un filtro por nombre.</p>
            <p style={{fontSize: '1.125rem'}}>Tiene un diseño mobile-only.</p>
        </div>

    </>
  )
}
