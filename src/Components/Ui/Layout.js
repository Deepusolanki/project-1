import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aside from '../Aside'



export default function Layout() {
  return (
    <>
   <Header/>
     <main>
    <Row className='h-100'>
      <Col sm={3}>    
 <Aside/>
      </Col>
      <Col sm={9} className='a_tbdr'>
      <Outlet/>
      </Col>

    </Row>
  </main>
 <Outlet/>
<Footer/>

   </>
  
  )
}
