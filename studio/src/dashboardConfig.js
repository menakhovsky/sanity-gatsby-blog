export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60070110ba3b8528de923708',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-46eovojv',
                  apiId: '06c35b7c-0282-4177-bee7-ad03509a9ee4'
                },
                {
                  buildHookId: '600701113da5ab2bf98f219d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uq5ebsfh',
                  apiId: 'b8cb9d6c-6535-4966-a894-45227ea16de6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menakhovsky/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uq5ebsfh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
