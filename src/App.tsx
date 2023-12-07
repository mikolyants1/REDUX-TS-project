import {Provider} from 'react-redux'
import {FC,useEffect,useState,useContext} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Outlet,Navigate} from 'react-router-dom'
import { theme,BackContext} from './types/state'
import Bask2 from './components/pages/bask'
import Regist from './components/pages/regist'
import Entry from './components/pages/entry'
import About from './components/pages/about'
import Main from './components/pages/main'
import Header from './components/pages/header'
import Catalog from './components/pages/sales'
import Loader from './components/ui/load'

export type func=(back:string)=>void

interface contextProp{
  set:func
}

const Home:FC<contextProp>=({set}):JSX.Element=>{
 const context=useContext<string>(BackContext)
 useEffect(():void=>{
  const {style}=document.querySelector('body') as HTMLElement
  style.background=`${context}`
  style.backgroundSize=context!=='none'?'100vw 100vh':'none'
  },[context])
  return (
    <Outlet 
     context={set}
     />
    )
}
const Page:FC<contextProp>=({set}):JSX.Element=>{
  return <>
      <Header />
      <Outlet
       context={set}
       />
    </>
}
const Shop:FC=():JSX.Element=>{
  return <>
         <Main/>
         <Outlet />
        </>
}

export default function App():JSX.Element{
  const [context,setContext]=useState<string>(theme.back3)
  const change=(back:string):void=>{
    if (back=='home') setContext(theme.back1)
    else if (back=='regist') setContext(theme.back2)
    else setContext(theme.back3)
   }
  return (
       <Provider store={store}>
         <PersistGate persistor={cachedStore} loading={<Loader />}>
           <BackContext.Provider value={context}>
             <Router>
               <Routes>
                 <Route path='/' element={<Home set={change} />}>
                   <Route index element={<Navigate to='shop' />} />
                   <Route path='regist' element={<Regist />} />
                   <Route path='home' element={<Entry />} />
                   <Route path='shop' element={<Page set={change} />}>
                    <Route index element={<Navigate to='list'/>}/>
                      <Route path='list' element={<Shop />}>
                        <Route index element={<Navigate to='Mac' />}/>
                        <Route path='Mac' element={<Catalog />}/>
                        <Route path='Iphone' element={<Catalog />}/>
                        <Route path='Ipad' element={<Catalog />}/>
                        <Route path='Watch' element={<Catalog />}/>
                      </Route>
                      <Route path='about' element={<About />} />
                      <Route path='bask' element={<Bask2 />} />
                   </Route>
                 </Route>
               </Routes>
             </Router>
           </BackContext.Provider>
         </PersistGate>
       </Provider>
        )
}