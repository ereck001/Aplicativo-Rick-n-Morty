import axios from 'axios'
import { useEffect, createContext, useState } from 'react'


export const LocationCtx = createContext<any>(null)

export const LocationProvider = ({children}: any) => {
  const [locationData, setLocationData] = useState([])

  useEffect(()=>{
       axios.get('https://rickandmortyapi.com/api/location')
        .then(res => {
            setLocationData(res.data.results)          
        })
      .catch(err => console.log(err.response.status))         
      },[])

  return <LocationCtx.Provider value={{locationData}}>
    {children}
  </LocationCtx.Provider>
}

