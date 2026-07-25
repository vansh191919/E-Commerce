import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="foo<li>ter_logo" />
        <p><p id="e1">E</p>SHOP</p>
      </div>
      <ul className="footer-links">
      <li><h4>Help</h4><a href="" >Payments </a><a href="" >Shipping</a><a href="" > Cancellation & Returns</a> <a href="" >FAQ</a></li>
      <li><h4>Products</h4><a href="a" >Mens Wear</a> <a href="" >Womens Wear</a> < a href="" > Kids Wear</a></li>
      <li><h4>Offices</h4><a href="" >EShop Internet Private Limited, </a><a href="" >Gurgaon NCR 100112,Delhi,India</a></li>
      <li><h4>About</h4><a href="" >Contact Us </a><a href="" > About Us</a> <a href="" > Careers</a> <a href="" >EShop Corporate</a></li>
      <li><h4>Contact</h4><a href="" >IndiaCIN : U51109KA2012PTC066107</a> <a href="" >Telephone: 044-45614700 / 044-67415800</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <a href="https://www.instagram.com/"><img src={instagram_icon} alt="instagram_icon" /></a>
        </div>
         <div className="footer-icons-container">
            <a href="https://www.pinterest.com/"><img src={pintester_icon} alt="pintester_icon" /></a>
        </div>
         <div className="footer-icons-container">
            <a href="https://www.whatsapp.com/"><img src={whatsapp_icon} alt="whatsapp_icon" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2009-2026 ESHOP. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
