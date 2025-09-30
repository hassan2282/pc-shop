import { Outlet } from 'react-router-dom'

function StoreContainer() {
  return (
    <>
        <Header />
        <ScrollToTop />

            <Outlet />

        <Footer /> 
    </>
  )
}

export default StoreContainer