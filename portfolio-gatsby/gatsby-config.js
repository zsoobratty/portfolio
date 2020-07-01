module.exports = {
    siteMetadata: {
      description: "Personal page of Ziad Soobratty",
      locale: "en",
      title: "Ziad Soobratty",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: {
            'back': '#edf0f3',
            'front': '#2b3137',
            'lead': '#E44E5A',
            'lead-text': '#ffffff',
            'line': '#ced9e3',
            'skill-1': '#FFB133',
            'skill-2': '#0077B8',
            'skill-3': '#2ebc50',
          }
        },
      },
    ],
  }