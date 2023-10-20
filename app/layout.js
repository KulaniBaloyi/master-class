import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'



export const metadata = {
  title: 'Master Class',
  description: 'A platform where teachers and students can learn ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
