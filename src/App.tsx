import {Provider} from 'react-redux'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Outlet} from 'react-router-dom'
import Bask2 from './components/bask'
import Regist from './components/regist'
import Entry from './components/entry'
import About from './components/about'
import Main from './components/main'
import Header from './components/header'
import React from 'react'
const Home:React.FC=():JSX.Element=> {
   return <div>
       <Outlet />
   </div>
}
const Links:React.FC=():JSX.Element=> {
   return <div>
   <Entry />
   </div>
}
const Shop:React.FC=():JSX.Element=>{
    return <div>
        <Outlet />
    </div>
}
const ShopList:React.FC=():JSX.Element=> {
    return <div>
    <Header />
    <Main />
   </div>
}
const Names:React.FC=():JSX.Element=>{
   return <div>
      <Header />
     <About />
   </div>
}
const BaskList:React.FC=():JSX.Element=>{
    return <div>
       <Header />
      <Bask2 />
    </div>
 }
const Loading:React.FC=():JSX.Element=>{
  const load=React.useRef<HTMLDivElement>(null!)
  enum style {
    width='100%',
    textAlign='center'
  }
  React.useEffect(()=>{
     setInterval(() => {
        setTimeout(() => {
            load.current.innerHTML=''
        }, 0);
        setTimeout(() => {
            load.current.innerHTML='.'
        }, 200);
        setTimeout(() => {
            load.current.innerHTML='..'
        }, 400);
        setTimeout(() => {
            load.current.innerHTML='...'
        }, 600);
    }, 1000);
  })
     return <div style={style}>
        <div>Loading</div>
        <div ref={load}></div>
     </div>
}
export default function App():JSX.Element{
  return <Provider store={store}>
           <PersistGate persistor={cachedStore} loading={<Loading />} >
             <Router>
               <Routes>
                 <Route path='/' element={<Home />}>
                  <Route index element={<Links />} />
                   <Route path='regist' element={<Regist />} />
                   <Route path='home' element={<Shop />} >
                    <Route index element={<ShopList />} />
                    <Route path='about' element={<Names />} />
                    <Route path='bask' element={<BaskList />} />
                 </Route>
               </Route>
             </Routes>
           </Router>
         </PersistGate>
       </Provider>
}