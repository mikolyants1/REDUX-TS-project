import {Provider} from 'react-redux'
import {useState} from 'react'
import store,{cachedStore} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import { theme,BackContext} from './types/state'
import Bask2 from './components/pages/bask'
import Regist from './components/pages/regist'
import Entry from './components/pages/entry'
import About from './components/pages/about'
import Catalog from './components/pages/sales'
import Loader from './components/ui/load'
import { Home, Page, Shop } from './components/routes/route'

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