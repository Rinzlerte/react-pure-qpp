import { Routes , Route, Link} from "react-router-dom"
import { Suspense } from "react"
import { routConfig } from "../../../../shared/config/routeConfig/routerConfig"

const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
        <Routes>
           {
           Object.values(routConfig).map(({element, path})=>(
            <Route 
                key={path}
                path={path}
                element={(element)}
            />
           )) 
           }
        </Routes>
    </Suspense>
  )
}

export default AppRouter