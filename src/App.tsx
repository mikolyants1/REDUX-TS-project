import {Provider} from 'react-redux'
import {FC,useEffect,useState,useContext} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Outlet,Navigate} from 'react-router-dom'
import { theme,BackContext} from './types/state'
import Bask2 from './components/bask'
import Regist from './components/regist'
import Entry from './components/entry'
import About from './components/about'
import Main from './components/main'
import Header from './components/header'
import { Catalog } from './components/sales'
export type func=(back:string)=>void
interface contextProp{
  set:func
}
const Home:FC<contextProp>=({set}):JSX.Element=>{
  const context:string=useContext(BackContext)
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
const HomePage:FC<contextProp>=({set}):JSX.Element=>{
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
const Loading:FC=():JSX.Element=>{
  const [text,setText]=useState<string>('')
  enum style {
    width='100%',
    textAlign='center'
  }
useEffect(():void=>{
  setInterval(():void => {
    setTimeout(():void => {
      setText('')
      }, 0);
    setTimeout(():void => {
      setText('.')
      }, 200);
    setTimeout(():void => {
      setText('..')
      }, 400);
    setTimeout(():void => {
      setText('...')
      }, 600);
    }, 1000);
  },[])
return <div style={style}>
         <div>
           Loading {text}
         </div>
       </div>
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
         <PersistGate persistor={cachedStore} loading={<Loading />}>
           <BackContext.Provider value={context}>
             <Router>
               <Routes>
                 <Route path='/' element={<Home set={change} />}>
                   <Route index element={<Navigate to='shop' />} />
                   <Route path='regist' element={<Regist />} />
                   <Route path='home' element={<Entry />} />
                   <Route path='shop' element={<HomePage set={change} />}>
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