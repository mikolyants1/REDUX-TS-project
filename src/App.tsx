import {Provider} from 'react-redux'
import {FC,useEffect,useState} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Outlet} from 'react-router-dom'
import Bask2 from './components/bask'
import Regist from './components/regist'
import Entry from './components/entry'
import About from './components/about'
import Main from './components/main'
import Header from './components/header'

const Home:FC=():JSX.Element=>{
   return <div>
       <Outlet />
   </div>
}
const Links:FC=():JSX.Element=>{
   return <div>
   <Entry />
   </div>
}
const Shop:FC=():JSX.Element=>{
    return <div>
        <Outlet />
    </div>
}
const ShopList:FC=():JSX.Element=>{
    return <div>
    <Header />
    <Main />
   </div>
}
const Names:FC=():JSX.Element=>{
   return <div>
     <Header />
     <About />
   </div>
}
const BaskList:FC=():JSX.Element=>{
    return <div>
       <Header />
       <Bask2 />
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
        )
}