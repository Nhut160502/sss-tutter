import React from 'react'
import { Content, Sidebar, Footer, Header } from '../components/index'
import Loading from 'src/components/Loading'
import { ToastContainer } from 'react-toastify'
const DefaultLayout = () => {
  return (
    <>
      <ToastContainer />
      <Loading />
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
