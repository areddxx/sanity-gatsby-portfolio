export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '603497d9762750a074199f8a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dtfnhrxo',
                  apiId: 'e43cf8fa-8fe6-463d-83f8-067fa76abe29'
                },
                {
                  buildHookId: '603497da35e60b94be740d70',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1puj377y',
                  apiId: '238d2b6c-f70f-4ae2-8d1d-5a76edfc4092'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/areddxx/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1puj377y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
