import axios from 'axios'
import { useEffect, createContext, useState } from 'react'


export const EpisodeCtx = createContext<any>(null)

export const EpisodeProvider = ({children}: any) => {
  const [episodeData, setEpisodeData] = useState([])

  useEffect(()=>{
       axios.get('https://rickandmortyapi.com/api/episode')
        .then(res => {
            setEpisodeData(res.data.results)          
        })
      .catch(err => console.log(err.response.status))         
      },[])

  return <EpisodeCtx.Provider value={{episodeData}}>
    {children}
  </EpisodeCtx.Provider>
}