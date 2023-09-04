
import ThemeRegistry from '../../components/Theme/ThemeRegistry'
import { AuthContextProvider } from '../../context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EFFIZIENT',
  description: 'SOP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ThemeRegistry>
    <AuthContextProvider>

      <body className={inter.className} >{children}</body>
    </AuthContextProvider>
      </ThemeRegistry>
       
    </html>
  )
}
