import {Provider} from 'react-redux'
import {useState} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import Bask2 from './components/views/paths/bask'
import Regist from './components/views/login/regist'
import Entry from './components/views/login/entry'
import About from './components/views/paths/about'
import Catalog from './components/views/pages/main'
import Loader from './components/ui/blocks/load/loader'
import { BackContext, theme } from './components/helpers/context'
import { Home } from './components/routes/HomeRout'
import { Page } from './components/routes/PageRout'
import { Shop } from './components/routes/ShopRout'

export default function App():JSX.Element{
  const [context,setContext] = useState<string>(theme.back3);
  const change = (back:string):void=> {
    if (back=='home') setContext(theme.back1);
    else if (back=='regist') setContext(theme.back2);
    else setContext(theme.back3);
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
                        <Route index element={<Navigate to=':id' />}/>
                        <Route path=':id' element={<Catalog />}/>
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