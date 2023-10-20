import Image from 'next/image'
import TrailerSection from './components/TrailerSection'
import FAQ from './components/FAQ'
import Landing from './components/Landing'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing/>
     <TrailerSection/>
     <FAQ/>
    </main>
  )
}
