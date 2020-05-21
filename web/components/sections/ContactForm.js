import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import styles from './ContactForm.module.css'
import * as typeformEmbed from '@typeform/embed'

export default function ContactForm(props) {
  const {heading, subtitle} = props
  const [typeform, setTypeform] = useState(undefined)

  useEffect(() => {
    const contactTypeform = typeformEmbed.makePopup('https://andy006405.typeform.com/to/EcURE7', {
      mode: 'popup',
      hideFooter: true,
      autoClose: 3,
      hideScrollbars: true,
      onSubmit: () => {
        console.log('Typeform successfully submitted')
      }
    })

    setTypeform(contactTypeform)
  }, [])

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <form className={styles.form}>
          {typeform !== undefined && (
            <button type='button' alt='Tap here to contact cole' onClick={() => typeform.open()}>
              Contact Cole
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string
}
