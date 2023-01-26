import { useLocation} from "react-router-dom"

const Main = ({children}) => {

    const {pathname} = useLocation()
    const heading = pathname.slice(1,)
    return (
        <main 
            className='w-screen md:p-10 bg-slate-300 p-2 flex flex-col gap-3 justify-start items-center h-screen text-white'
        >
            <h3 className="text-subtitle">{heading}</h3>
            {children}
        </main>
    )
}

export default Main