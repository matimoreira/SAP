import { FC } from 'react'

interface pageProps {
    params: {
        Id: number
    }
}


const page: FC<pageProps> = ({params}) => {
    console.log(params);
    return <h1>Este es el developer legajo numero {params.Id}</h1>
}


export default page;