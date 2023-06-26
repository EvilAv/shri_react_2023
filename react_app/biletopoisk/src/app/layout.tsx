import './globals.css'
import { Inter } from 'next/font/google'
import { CustomHeader } from '../../components/layout_components/header/CustomHeader'
import { CustomFooter } from '../../components/layout_components/footer/CustomFooter'
import { StoreProvider } from '../../redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,600;1,400&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        <StoreProvider>
          <CustomHeader />
          <div id='root'></div>
          {children}
          </StoreProvider>
        <CustomFooter />
      </body>
    </html>
  )
}
