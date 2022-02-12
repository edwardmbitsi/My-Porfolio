const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/edwardmbitsi',
  title: 'EM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Edward Mbitsi',
  role: 'Front End Engineer',
  description:
    'I have a passion for coding and very good at problem solving. I work well around teams and quite as god working alone. Feel free to contact me. Working on solving world problems in every programme I write.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/edward-mbitsi-9a8190227/',
    github: 'https://github.com/edwardmbitsi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Delani Studio',
    description:
      'This is a poject about a studio which develops, designs and manages products on behalf of the customers.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/edwardmbitsi/week3',
    livePreview: 'https://edwardmbitsi.github.io/week3/',
  },
  {
    name: 'Github Repositories',
    description:
      'An Angular web application which performs the search of GitHub users and also allows you to view user repos.',
    stack: ['Angular', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/edwardmbitsi/Angular-week-2',
    livePreview: 'https://edwardmbitsi.github.io/Angular-week-2/',
  },
  {
    name: 'Pizza Kingdom',
    description:
      'This is a poject about a pizza shop bussiness, users can order pizza from the website and also get to ss the prices of certain pizzas available.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/edwardmbitsi/week4',
    livePreview: 'https://edwardmbitsi.github.io/week4/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Android',
  'Spark',
  'Material UI',
  'Git',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mbitsiedward@gmail.com',
}

export { header, about, projects, skills, contact }
