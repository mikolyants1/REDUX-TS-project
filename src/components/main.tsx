import {useEffect} from 'react'
import { NavLink,useOutletContext } from 'react-router-dom'
import {nameMass,mass1 } from './items'
import { func } from '../App'
interface Link{
  isActive:boolean
}
export default function Main():JSX.Element{
const SetContext:func=useOutletContext()
useEffect(():void=>SetContext('none'),[])
return (
      <div className='main'>
        <nav className='catalog'>
          {nameMass.map(({name}:mass1,i:number):JSX.Element=>(
            <div className='cat1' key={i}>
              <NavLink to={`${name}`} 
               className={({isActive}:Link)=>(isActive?'Active':'Pending')}>
                {name}
              </NavLink>
           </div>
          ))}
        </nav>
      </div>
     )
}
