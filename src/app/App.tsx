
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/classnames/ClassNames"
import { AppRouter } from "./providers/router";
import {Navbar} from '../widgets/Navbar'
import './styles/index.scss'

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
      <div className={classNames(`app`, {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button type="button" onClick={toggleTheme}>
            CHANGE
        </button>
    </div>
  )
}

export default App