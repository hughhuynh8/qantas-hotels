import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Header.css'

const Header = ({ homeUrl, imgUrl, altText }) => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href={homeUrl}><img src={imgUrl} alt={altText} /></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header