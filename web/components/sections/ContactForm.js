import PropTypes from 'prop-types'
import React from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm(props) {
  const {heading, subtitle, actionUrl} = props

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {/* {actionUrl && ( */}
        <form
          method='POST'
          name='contact'
          className={styles.form}
          // data-netlify='true'
          // netlify-honeypot='bot-field'
          action={`mailto:${actionUrl}`}
        >
          <div hidden aria-hidden='true'>
            <label>
              Don’t fill this out if you're human:
              <input name='bot-field' />
            </label>
          </div>

          <label>
            Your Email
            <input type='email' name='email' />
          </label>
          <label>
            Your Name
            <input type='text' name='name' />
          </label>
          <label>
            Message
            <input type='text' name='message' />
          </label>
          <button type='submit'>Send</button>
        </form>
        {/* )} */}
      </div>
    </section>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string
}
