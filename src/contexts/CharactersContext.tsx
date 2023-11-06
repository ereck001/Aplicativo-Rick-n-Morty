import axios from 'axios'
import { useEffect, createContext, useState } from 'react'


export const CharCtx = createContext<any>(null)

export const CharsProvider = ({children}: any) => {
  const [charData, setCharData] = useState([])

  useEffect(()=>{
       axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setCharData(res.data.results)          
        })
      .catch(err => console.log(err.response.status))         
      },[])

  return <CharCtx.Provider value={{charData}}>
    {children}
  </CharCtx.Provider>
}

