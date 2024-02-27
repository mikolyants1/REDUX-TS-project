import { createContext } from "react"
import { IAboutContext, ITheme } from "../../types/state";
import back1 from '../../img/back1.jpg'
import back2 from '../../img/back2.jpg'

export const theme:ITheme = {
    home:`url(${back1}) no-repeat`,
    regist:`url(${back2}) no-repeat`,
    none:'none'
};
export const AboutTheme = createContext<IAboutContext>({} as IAboutContext);

export const BackContext = createContext<string>(theme.none);
