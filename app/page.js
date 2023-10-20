import Image from 'next/image'
import TrailerSection from './components/TrailerSection'
import FAQ from './components/FAQ'
import Landing from './components/Landing'
import Explore from './components/Explore'
import ComingSoon from './components/ComingSoon'
import SignUp from './components/SignUp'
import LevelUpTeamSection from './components/LevelUpTeamSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing/>
     <TrailerSection/>
     <Explore/>
     <ComingSoon/>
     <SignUp/>
     <LevelUpTeamSection/>
     <FAQ/>
    </main>
  )
}
