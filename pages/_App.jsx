import Head from 'next/head';

import '../src/style.css';


function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        Lista de presença - Panificação
      </Head>
    
      <Component { ...pageProps }/>
    </>    
  )

   
}

export default App;