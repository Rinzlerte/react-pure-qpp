import { About_Page } from "../../../pages/AboutPage"
import { Main_Page } from "../../../pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <Main_Page />
    },
    [AppRoutes.ABOUT] : {
        path: RoutePath.main,
        element: <About_Page />
    },
}