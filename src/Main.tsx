import Routes from "../src/routes/route.stack"
import { CharsProvider } from "./contexts/CharactersContext"
import { LocationProvider } from "./contexts/LocationContext"
import { EpisodeProvider } from "./contexts/EpisodeContext"

export default () => <CharsProvider>
        <EpisodeProvider>
            <LocationProvider>
                <Routes /> 
            </LocationProvider>
        </EpisodeProvider>        
    </CharsProvider>

