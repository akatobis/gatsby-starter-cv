module.exports = {
  siteTitle: 'Привет!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Москвин Алексей',
  twitterUsername: 'twiter',
  githubUsername: 'akatobis',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Параллельно с учёбой и работой, самостоятельно изучаю программирование через статьи и книги, преимущественно изучаю все, что связанно с web программированием на c#. Увлекаюсь скалолазанием, также недавно нашел для себя интерес в философии и занял 1 место на конференции в вузе. В школьные годы занимался боксом и игрой на пианино.`, // Убрана лишняя запятая
  skills: [
    {
      name: '.Net',
      level: 70,
    },
    {
      name: 'Angular',
      level: 60,
    },
    {
      name: 'Postgres',
      level: 50,
    },
    {
      name: 'Git',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    {
      company: 'Юнисистемс',
      begin: {
        month: 'ферваль',
        year: '2023',
      },
      duration: null,
      occupation: 'Fullstack developer',
      description:
        'Занимаюсь web-разработкой на технологиях: ASP.NET 6.0, Angular 14, PostgreSQL, Docker, RabbitMQ. Занимался поддержкой и доработкой legacy кода на .NET framework 4.7-6.0, webforms, mssql, SharePoint.',
    },
    /* more jobs here */
  ],
  portifolio: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url: 'https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/santosfrancisco/react-awesome-styled-grid',
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/_franciscodf',
    linkedin: 'https://www.linkedin.com/in/santos-francisco',
    github: 'https://github.com/santosfrancisco',
    email: 'yoshi.df@gmail.com',
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
};
