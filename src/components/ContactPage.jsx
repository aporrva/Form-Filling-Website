import React from 'react'
import HeadingOfPage from '../common/HeadingOfPage'
import FooterPage from '../common/FooterPage'
import Form from './Form'
import Form2 from './Form2'

function ContactPage() {
  return (
    <div>
        <HeadingOfPage heading="Contact Us" about="Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible." />
        <FooterPage />
        <Form2 />
    </div>
  )
}

export default ContactPage