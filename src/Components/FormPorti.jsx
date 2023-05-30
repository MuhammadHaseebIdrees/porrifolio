import React, { useEffect } from 'react'
import '../AStyles/FormPorti.css'

const FormPorti = () => {

  return (
    <div className='Form_Porti'>
      <form action='https://formspree.io/f/mwkjwbgj' method='POST'>
        <label>Name</label>
        <input type="text"
          name='userName'
          autoComplete='off'
          required
        />
        <label>Email</label>
        <input type="email"
          name='eMail'
          autoComplete='off'
          required
        />
        <label>Subject</label>
        <input type="text"
          name='subject'
          autoComplete='off'
          required
        />
        <textarea rows="6" placeholder='Type your message here!'
          name='message'
          autoComplete='off'
          required
        ></textarea>
        <button className='contact_sumbimt_btn'>Submit</button>
      </form>
    </div>
  )
}

export default FormPorti