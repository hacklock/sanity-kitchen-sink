export default {
  widgets: [
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
                  buildHookId: '608f3d57521eb780e616ecba',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hb4xatim',
                  apiId: '21419ffd-1c53-42e4-a653-4770f60cbc4e'
                },
                {
                  buildHookId: '608f3d57f64537561908a8df',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ek7gyh93',
                  apiId: '500dea02-6c50-43c1-bb48-b51e8e7d06f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hacklock/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ek7gyh93.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
