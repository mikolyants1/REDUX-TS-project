import { createContext } from "react"
import { AboutContext, Theme } from "../../types/state";
import back1 from '../../img/back1.jpg'
import back2 from '../../img/back2.jpg'

export const theme:Theme = {
    home:`url(${back1}) no-repeat`,
    regist:`url(${back2}) no-repeat`,
    none:'none'
};
export const AboutTheme = createContext<AboutContext>({
    toggle:(_)=>()=>{},
    srcs:[],
    className:{one:"",two:"",three:""}
})
export const BackContext = createContext<string>(theme.none);
