import { Fragment } from 'react'

import LinkedinLink from './LinkedinLink'

const experiences = [
  {
    company: 'iFood',
    url: 'https://ifood.com.br/',
    role: 'Senior Software Engineer',
    period: '2021 - now',
    description: `I am currently working on a web portal developed to help all logistics involved in iFood operations around the world. This application is developed using Java, Kotlin, microservices, TypeScript, Webpack, Testing Library, aws, and nx monorepo.`
  },
  {
    company: 'Hotmart',
    url: 'https://hotmart.com',
    role: 'Senior Software Engineer',
    period: '2020 - 2021',
    description: `During my time at Hotmart, I worked as a senior frontend developer in two large projects. The first was focused on user privacy, creating internal applications in React with TypeScript and features in existing products for end users, using Next, Meteor, and Vue.js to meet all demands of legislation such as GDPR, LGPD, cookie policy, etc. In the second project, I worked on a product vital for Hotmart business. Our stack included React, Redux, Cypress, Vitest, and Meteor.`
  },
  {
    company: 'dti digital',
    url: 'https://www.dtidigital.com.br/',
    role: 'Senior Software Engineer',
    period: '2019 - 2020',
    description: `At the beginning of my journey at DTI, I worked as a developer using .NET Core, Angular, and SQL Server. Soon after, I took on the role of technical leader for squads aimed at Vale, one of the largest mining companies in the world. We worked with a mix of recent technologies such as .NET Core (serverless), Protocol Buffers, Redis, Cosmos DB, and micro frontends (React and Angular) alongside traditional technologies like Java, SQL Server, and Power BI. We focused heavily on agile methodologies and used Scrum with adaptations for the client reality.`
  },
  {
    company: 'IBM',
    url: 'https://ibm.com/',
    role: 'Full Stack Developer',
    period: '2015 - 2019',
    description: `During my time at IBM, I worked for two major players in the Brazilian automotive industry, FCA/Stellantis and Volkswagen. Initially, I worked as a full stack developer creating applications to improve supply chain management processes. These systems were mostly built in Java and Node.js on the backend and Angular and React on the frontend. Over time, I transitioned to software architecture, helping migrate and update these applications from FIAT internal data centers to AWS, initially using Beanstalk, Docker, and later Kubernetes. At Volkswagen, I developed a chatbot orchestrator to assist users with various internal processes. This application was built using Node.js, MongoDB, IBM Watson, and Angular, and was hosted on the IBM Cloud.`
  }
]

export default () => (
  <section className="flex min-h-0 flex-col gap-y-3">
    <h2 className="text-xl font-bold">Work Experience</h2>
    {experiences.map(({ company, url, role, period, description }) => (
      <Fragment key={company}>
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a className="hover:underline" href={url}>
                  {company}
                </a>
                <span className="inline-flex gap-x-1"></span>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">{period}</div>
            </div>
            <h4 className="font-mono text-sm leading-none">{role}</h4>
          </div>
          <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">{description}</div>
        </div>
        <hr className="border-gray-200 dark:border-white" />
      </Fragment>
    ))}
    <div className="rounded-lg bg-card text-card-foreground blur-sm">
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <LinkedinLink>Why so curious?</LinkedinLink>
            <span className="inline-flex gap-x-1"></span>
          </h3>
          <div className="text-sm tabular-nums text-gray-500">
            <LinkedinLink>20?? - 20??</LinkedinLink>
          </div>
        </div>
        <h4 className="font-mono text-sm leading-none">
          <LinkedinLink>Nope</LinkedinLink>
        </h4>
      </div>
      <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
        <LinkedinLink>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ligula nec accumsan imperdiet.
          Praesent imperdiet ut nibh quis pellentesque. Morbi cursus ut urna in euismod. Curabitur vulputate sagittis
          est, vel venenatis nunc efficitur et. Sed pretium nisl et enim tempor, ut pharetra augue porta. Vestibulum
          scelerisque tortor magna, vel cursus turpis faucibus dapibus. Phasellus vitae dictum urna, a condimentum
          lorem. Cras vehicula laoreet justo, nec commodo enim viverra a.
        </LinkedinLink>
      </div>
    </div>
  </section>
)
