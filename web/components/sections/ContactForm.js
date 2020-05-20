import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import styles from './ContactForm.module.css'
import * as typeformEmbed from '@typeform/embed'

export default function ContactForm(props) {
  const {heading, subtitle, actionUrl} = props
  let popup1
  useEffect(() => {
    popup1 = typeformEmbed.makePopup('https://andy006405.typeform.com/to/EcURE7', {
      opacity: 55,
      mode: 'popup',
      // autoOpen: true,
      // autoClose: 3,
      hideFooter: true,
      hideScrollbars: true,
      onSubmit: function () {
        console.log('Typeform successfully submitted')
      }
    })
  }, [])

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {/* <p className={styles.subtitle}>{subtitle}</p>
        <form
          method='GET'
          name='contact'
          className={styles.form}
          encType='multipart/form-data'
          // data-netlify='true'
          // netlify-honeypot='bot-field'
          action={`mailto:${actionUrl}`}
        >
          <label>
            Subject
            <input name='subject' type='text' />
          </label>
          <br />
          <label>
            Message
            <textarea name='body' />
          </label>
          <br />
        
          <button type='submit'>Send</button>
        </form> */}
        <form className={styles.form}>
          <button type='button' onClick={() => popup1.open()}>
            Contact Cole
          </button>
        </form>
      </div>
    </section>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string
}
