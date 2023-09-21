import {Provider} from 'react-redux'
import {FC,useEffect,useState} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Outlet, Navigate} from 'react-router-dom'
import Bask2 from './components/bask'
import Regist from './components/regist'
import Entry from './components/entry'
import About from './components/about'
import Main from './components/main'
import Header from './components/header'

const Home:FC=():JSX.Element=>{
  return <div>
    <Header />
    <Outlet />
  </div>
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
  return (
         <Provider store={store}>
           <PersistGate persistor={cachedStore} loading={<Loading />} >
             <Router>
               <Routes>
                 <Route path='/' element={<Outlet />}>
                   <Route index element={<Navigate to='shop' />} />
                   <Route path='regist' element={<Regist />} />
                   <Route path='home' element={<Entry />} />
                   <Route path='shop' element={<Home />}>
                      <Route index element={<Main />} />
                      <Route path='about' element={<About />} />
                      <Route path='bask' element={<Bask2 />} />
                   </Route>
                 </Route>
               </Routes>
             </Router>
           </PersistGate>
         </Provider>
        )
}