import { createContext } from "react"
import { Theme } from "../../types/state";
import back1 from '../../img/back1.jpg'
import back2 from '../../img/back2.jpg'

export const theme:Theme = {
    back1:`url(${back1}) no-repeat`,
    back2:`url(${back2}) no-repeat`,
    back3:'none'
};

export const BackContext = createContext<string>(theme.back3);
