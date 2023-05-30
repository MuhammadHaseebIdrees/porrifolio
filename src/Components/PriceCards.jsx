import React from 'react'
import { Link } from 'react-router-dom'
import '../AStyles/PriceCards.css'

const PriceCards = () => {
  return (
    <div className='PriceCards'>
      <div className='cards_conatiner'>
        <div className="single_card">
          <h3>- Basic -</h3>
          <span className='card_bar'></span>
          <p className='cards_price'>$ 100</p>
          <p className="days_text">- 3 Days -</p>
          <p className="page_text">- 3 Pages -</p>
          <p className="featured_text">- Featured -</p>
          <p className="responive_design">-Responsive Design-</p>
          <Link to="/contact" className='purchase_text'>PURCHASE NOW</Link>
        </div>
        <div className="single_card">
          <h3>- Premium -</h3>
          <span className='card_bar'></span>
          <p className='cards_price'>$ 200</p>
          <p className="days_text">- 2 Days -</p>
          <p className="page_text">- 5 Pages -</p>
          <p className="featured_text">- Featured -</p>
          <p className="responive_design">-Responsive Design-</p>
          <Link to="/contact" className='purchase_text'>PURCHASE NOW</Link>
        </div>
        <div className="single_card">
          <h3>- Business -</h3>
          <span className='card_bar'></span>
          <p className='cards_price'>$ 300</p>
          <p className="days_text">- 5 Days -</p>
          <p className="page_text">- 8 Pages -</p>
          <p className="featured_text">- Featured -</p>
          <p className="responive_design">-Responsive Design-</p>
          <Link to="/contact" className='purchase_text'>PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  ) 
}
export default PriceCards