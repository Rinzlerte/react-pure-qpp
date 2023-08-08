import { Routes , Route, Link} from "react-router-dom"
import AboutPageLazy from '../pages/AboutPage.lazy'
import MainPageLazy  from "../pages/MainPage.lazy"
import { Suspense } from "react"
import '../styles/index.scss'
import { useTheme } from "../theme/useTheme"

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (

        <div className={`app ${theme}`}>
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
            <Route  path="/" element={<MainPageLazy/>}/>
            <Route  path="/about" element={<AboutPageLazy/>}/>
          </Routes>
        </Suspense>
   
    </div>
   
   
  )
}

export default App