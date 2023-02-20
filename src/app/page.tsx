import { EAPLogo } from "@/components/navigation/EAPLogo"

export default function Home() {
  return (
    <>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <div>1</div>
            <div>2</div>
            <div>3</div> */}
            {/* <h1 style={{fontSize: '2rem'}}>EAP <span><EAPLogo/></span>Easy Assigment Project</h1> */}
            {/* <h1 style={{fontSize: '2rem'}}>EAP</h1> */}
            <span><EAPLogo/></span>
            <h1 style={{fontSize: '2rem'}}>Easy Assigment Project</h1>
        </div>
        {/* <div style={{marginLeft:'20%', marginRight: '20%'}}> */}
        <article style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth:'500px'}}>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni ratione hic tempora nisi, pariatur velit sit maxime voluptatibus sunt repudiandae facere rem excepturi harum quaerat quos natus nobis a.</h3>
            </div>
        </article>

    </>
  )
}
