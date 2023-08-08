import { Routes , Route, Link} from "react-router-dom"
import AboutPageLazy from '../pages/AboutPage.lazy'
import MainPageLazy  from "../pages/MainPage.lazy"
import { Suspense } from "react"

const App = () => {
  return (
    <div>
        <Link to="/">Main</Link>
        <br/>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route  path="/" element={<MainPageLazy/>}/>
            <Route  path="/about" element={<AboutPageLazy/>}/>
          </Routes>
        </Suspense>
   
    </div>
   
  )
}

export default App