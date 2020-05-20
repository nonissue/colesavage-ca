import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import styles from './ContactForm.module.css'
import * as typeformEmbed from '@typeform/embed'

export default function ContactForm(props) {
  const {heading, subtitle} = props
  let popup1
  useEffect(() => {
    popup1 = typeformEmbed.makePopup('https://andy006405.typeform.com/to/EcURE7', {
      opacity: 55,
      mode: 'popup',
      hideFooter: true,
      hideScrollbars: true,
      onSubmit: () => {
        console.log('Typeform successfully submitted')
      }
    })
  }, [])

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <form className={styles.form}>
          <button type='button' alt='Tap here to contact cole' onClick={() => popup1.open()}>
            Contact Cole
          </button>
        </form>
      </div>
    </section>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string
}
