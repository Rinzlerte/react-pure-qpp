import { Link} from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/classnames/ClassNames"
import './styles/index.scss'
import { AppRouter } from "./providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (

        <div className={classNames(`app`, {}, [theme])}>
            <Link to="/">Main</Link>
        <br/>
        <Link to="/about">About</Link>
        
        <br/>
        <button type="button" onClick={toggleTheme}>
            CHANGE
        </button>
        <br/>
        
        <AppRouter />
      
    </div>
  )
}

export default App