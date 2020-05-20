export default {
  type: 'object',
  name: 'contact-form',
  title: 'contact form',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading',
    },
    {
      name: 'actionUrl',
      type: 'url',
      title: 'Recipient Email',
      description:
        'Email address for person receiving correspondence from form',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Contact form section',
      };
    },
  },
};
