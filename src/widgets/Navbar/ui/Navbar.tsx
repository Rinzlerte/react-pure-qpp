import { Link} from "react-router-dom"
import cls from './Navbar.module.scss'
import { classNames } from "../../../shared/lib/classnames/ClassNames"
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink";

interface NavbarProps {
    className?: string,
      
}

export const Navbar = ({className}: NavbarProps ) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
         <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
    </div>
  )
} 
