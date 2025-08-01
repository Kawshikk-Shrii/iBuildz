import React from 'react'
import ArcTitle from './ArcTitle'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <ArcTitle />
      <h2 style={{ textAlign: 'center', marginBottom: '0px', padding: '40px' }}>
        Your Complete Real Estate "SERVICE HUB"!!!
      </h2>
      <p style={{ textAlign: 'center', marginTop: '0px', fontStyle: 'italic', padding: '0 40px' }}>
        Connect with verified interior designers, architects, and contractors to build your dream home.
        <br />
      </p>
      <div style={{ textAlign: 'center', marginTop:'40px', fontFamily: "cursive", fontSize: '1rem'}}><h3>Aim of ibuildz: </h3><p>To Simplify, streamline, and smartly connect every Step of Civil construction -- from planning to workforce, with accessible technology for all.</p></div>
      <div style={{textAlign: 'center',marginTop: '40px',color: 'Green'}}><p>Motto: "Empowering Every Hand that Builds"</p></div>
    </div>
  )
}

export default Homepage
