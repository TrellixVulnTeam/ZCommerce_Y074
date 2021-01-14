import '../styles/global.scss'
import 'tailwindcss/tailwind.css'
import DataProvider from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
