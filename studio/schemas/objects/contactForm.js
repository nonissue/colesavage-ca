export default {
  type: 'object',
  name: 'contactForm',
  title: 'Contact Form',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading'
    },
    {
      name: 'actionUrl',
      type: 'string',
      title: 'Recipient Email',
      description: 'Email address for person receiving correspondence from form'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare ({title}) {
      return {
        title,
        subtitle: 'Contact form section'
      }
    }
  }
}
