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

function Home() {
   return <div>
       <Outlet />
   </div>
}
function Links() {
   return <div>
   <Entry />
   </div>
}
function Shop() {
    return <div>
        <Outlet />
    </div>
}
function ShopList() {
    return <div>
    <Header />
    <Main />
   </div>
}
function Names(){
   return <div>
      <Header />
     <About />
   </div>
}
function BaskList(){
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