import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../component/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900']
})


export const metadata = {
  title: 'Kartika Jaya Kontruksindo',
  description: 'Company Profile PT Kartika Jaya Kontruksindo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-gradient-to-r from-slate-800 to-slate-950`}>
        <Navbar />
        <main className="mx-auto px-4 py-24 text-center flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
        <footer className="bg-blue-200 text-white text-center py-8">
          <div className="mx-auto">
            © 2024 PT Kartika Jaya Kontruksindo. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}