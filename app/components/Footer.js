import React from 'react'

const Footer = () => {
  return (
    <footer className='p-5 py-10 grid grid-cols-4 gap-10 border-t'>
        <ul className='flex flex-col gap-5'>
            <h2>Explore</h2>
            <li>Articles</li>
            <li>Sitemap</li>
            <li>Gifts</li>
        </ul>
        <ul className='flex flex-col gap-5'>
            <h2>Divcersity, Equity and Inclusion</h2>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Social Impact</li>
            <li>Support</li>
        </ul>
        <ul className='flex flex-col gap-5'>
            <h2>Social</h2>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
        </ul>
        <ul className='flex flex-col gap-5'>
            <h2>Download</h2>
            <li>App Store</li>
            <li>Google Play</li>
            <li>Google Play</li>
            <li>Roku</li>
            <li>Infinity</li>
        </ul>
    </footer>
  )
}

export default Footer