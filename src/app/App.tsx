import { Routes , Route, Link} from "react-router-dom"
import {About_Page} from '../pages/AboutPage/index'
import {Main_Page}  from "../pages/MainPage/index"
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/classnames/ClassNames"
import './styles/index.scss'


const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (

        <div className={classNames(`app`, {}, [theme])}>
        <br/>
        <button type="button" onClick={toggleTheme}>
            CHANGE
        </button>
        <br/>

        <Link to="/">Main</Link>
        <br/>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route  path="/" element={<Main_Page/>}/>
            <Route  path="/about" element={<About_Page/>}/>
          </Routes>
        </Suspense>
   
    </div>
   
   
  )
}

export default App