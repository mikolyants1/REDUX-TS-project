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

const Home=():JSX.Element=> {
   return <div>
       <Outlet />
   </div>
}
const Links=():JSX.Element=> {
   return <div>
   <Entry />
   </div>
}
const Shop=():JSX.Element=>{
    return <div>
        <Outlet />
    </div>
}
const ShopList=():JSX.Element=> {
    return <div>
    <Header />
    <Main />
   </div>
}
const Names=():JSX.Element=>{
   return <div>
      <Header />
     <About />
   </div>
}
const BaskList=():JSX.Element=>{
    return <div>
       <Header />
      <Bask2 />
    </div>
 }

export default function App():JSX.Element{
  return  <Provider store={store}>
     <PersistGate persistor={cachedStore} >
        <Router>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Links />} />
              <Route path='regist' element={<Regist />} />
            <Route path='home' element={<Shop />} >
                <Route index element={<ShopList />} />
            <Route path='/home/about' element={<Names />} />
            <Route path='/home/bask' element={<BaskList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
}