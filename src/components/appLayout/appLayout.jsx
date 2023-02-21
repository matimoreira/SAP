import style, {globalStyles} from './styles';


export default function AppLayout ({children}) {
    return (
        <>
            <div>
              <main>
                {children}
              </main>
            </div>
            <style jsx>{style}</style>
            <style jsx global>{globalStyles}</style>
        </>
    )
}