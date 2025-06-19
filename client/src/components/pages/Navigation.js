import React, { useEffect, useState } from "react"
// import Header from "../common/header/Header"
import { BrowserRouter as Router, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./Home"


const Navigation = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Navigate>
          <Route exact path='/' component={Home} />
          {/* <Route path='*' component={pagenotfoud} /> */}
        </Navigate>
        {/* {showPopup && (
          <div className='absoluteForm popup'>
        <div className='brochurForm'>
            <div className='brochurLeft majdiimage popupimage'></div>
            <div className='brochurRight'>
                <form className='' style={{ width: '100%', maxWidth: '500px', maxHeight: '700px', display: 'flex', flexWrap: 'nowrap' }} onSubmit={handleSubmit} >
                  <div className='closeButton' onClick={() => setShowPopup(!showPopup)} >X</div>
                  <img src={mailimage} style={{ zIndex: 900000 , maxHeight: '30%',objectFit: 'contain'}}/>
                    <p style={{width: '100%',textAlign: 'center'}}>Subscribe to not see this again</p>
                    <h2 style={{width: '100%',textAlign: 'center'}}>Subscribe with us to get the latest real estate news</h2>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='Your Email' required></input>
                    <input className='btnsubmit' value='Send Your Email' type='submit'></input>
                </form>
            </div>
        </div>
    </div>
      )} */}
    {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Navigation