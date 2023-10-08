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
interface Style{
  width:string,
  height:string,
  borderRadius:string,
  borderLeft:string,
  borderTop:string,
  borderBottom:string,
  borderRight:string,
  rotate:string
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
function Loader():JSX.Element{
 const [spin,setSpin]=useState<number>(0)
  useEffect(():void=>{
    setInterval(():void => {
     setSpin((prev:number)=>(
      prev==360?0:prev+10
      ))
    }, 50);
  },[])
   const style:Style={
     width:'60px',
     height:'60px',
     borderRadius:'50%',
     borderLeft:'15px solid white',
     borderTop:'15px solid black',
     borderBottom:'15px solid black',
     borderRight:'15px solid black',
     rotate:`${spin}deg`
   }
   enum load {
    width='100%',
    justifyContent='center',
    display='flex'
   }
    return (
      <div style={load}>
        <div style={style} />
      </div>
    )
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