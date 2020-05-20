export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec581a05c4556018b5f0efa',
                  title: 'Sanity Studio',
                  name: 'colesavage-ca-studio',
                  apiId: '9e9e005f-a86e-453c-b533-c64a17186056'
                },
                {
                  buildHookId: '5ec581a05c455601845f1035',
                  title: 'Landing pages Website',
                  name: 'colesavage-ca',
                  apiId: '8d323fe1-ef9e-448f-a574-4dea1849f7af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nonissue/colesavage-ca',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://colesavage-ca.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
