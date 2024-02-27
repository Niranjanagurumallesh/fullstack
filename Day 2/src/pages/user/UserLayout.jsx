import React from 'react'
import PropTypes from "prop-types";
import Navbars from './Navbar';
import Footer from './Footer';
function UserLayout({children}) {
  return (
    <div className='user_container'>
        <header>
        <Navbars />
        </header>
        <main>
            {children}
        </main>
        <footer><Footer /></footer>
    </div>
  )
}

UserLayout.propTypes = {
    children : PropTypes.node.isRequired   //send component as a children for validating we use node
}
export default UserLayout   