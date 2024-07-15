import LinkedinLink from './LinkedinLink'

export default function Experience() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold">Work Experience</h2>
      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <a className="hover:underline" href="https://ifood.com.br/">
                iFood
              </a>
              <span className="inline-flex gap-x-1"></span>
            </h3>
            <div className="text-sm tabular-nums text-gray-500">2021 - now</div>
          </div>
          <h4 className="font-mono text-sm leading-none">Senior Software Engineer</h4>
        </div>
        <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          I am currently working on a web portal developed to help all logistics involved in iFood operations around the
          world. This application is developed using Java, Kotlin, microservices, TypeScript, Webpack, Testing Library,
          aws, and nx monorepo.
        </div>
      </div>
      <hr />
      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <a className="hover:underline" href="https://hotmart.com">
                Hotmart
              </a>
              <span className="inline-flex gap-x-1"></span>
            </h3>
            <div className="text-sm tabular-nums text-gray-500">2020 - 2021</div>
          </div>
          <h4 className="font-mono text-sm leading-none">Senior Software Engineer</h4>
        </div>
        <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          During my time at Hotmart, I worked as a senior frontend developer in two large projects. The first was
          focused on user privacy, creating internal applications in React with TypeScript and features in existing
          products for end users, using Next, Meteor, and Vue.js to meet all demands of legislation such as GDPR, LGPD,
          cookie policy, etc. In the second project, I worked on a product vital for Hotmart business. Our stack
          included React, Redux, Cypress, Jest, and Meteor.
        </div>
      </div>
      <hr />
      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <a className="hover:underline" href="https://www.dtidigital.com.br/">
                dti digital
              </a>
              <span className="inline-flex gap-x-1"></span>
            </h3>
            <div className="text-sm tabular-nums text-gray-500">2019 - 2020</div>
          </div>
          <h4 className="font-mono text-sm leading-none">Senior Software Engineer</h4>
        </div>
        <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          At the beginning of my journey at DTI, I worked as a developer using .NET Core, Angular, and SQL Server. Soon
          after, I took on the role of technical leader for squads aimed at Vale, one of the largest mining companies in
          the world. We worked with a mix of recent technologies such as .NET Core (serverless), Protocol Buffers,
          Redis, Cosmos DB, and micro frontends (React and Angular) alongside traditional technologies like Java, SQL
          Server, and Power BI. We focused heavily on agile methodologies and used Scrum with adaptations for the client
          reality.
        </div>
      </div>
      <hr />

      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <a className="hover:underline" href="https://ibm.com/">
                IBM
              </a>
              <span className="inline-flex gap-x-1"></span>
            </h3>
            <div className="text-sm tabular-nums text-gray-500">2015 - 2019</div>
          </div>
          <h4 className="font-mono text-sm leading-none">Full Stack Developer</h4>
        </div>
        <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          During my time at IBM, I worked for two major players in the Brazilian automotive industry, FCA/Stellantis and
          Volkswagen. Initially, I worked as a full stack developer creating applications to improve supply chain
          management processes. These systems were mostly built in Java and Node.js on the backend and Angular and React
          on the frontend. Over time, I transitioned to software architecture, helping migrate and update these
          applications from FIAT internal data centers to AWS, initially using Beanstalk, Docker, and later Kubernetes.
          At Volkswagen, I developed a chatbot orchestrator to assist users with various internal processes. This
          application was built using Node.js, MongoDB, IBM Watson, and Angular, and was hosted on the IBM Cloud.
        </div>
      </div>
      <hr />
      <div className="rounded-lg bg-card text-card-foreground blur-sm">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <LinkedinLink>Hexagon Mining</LinkedinLink>
              <span className="inline-flex gap-x-1"></span>
            </h3>
            <div className="text-sm tabular-nums text-gray-500">
              <LinkedinLink>2014 - 2015</LinkedinLink>
            </div>
          </div>
          <h4 className="font-mono text-sm leading-none">
            <LinkedinLink>.Net Developer</LinkedinLink>
          </h4>
        </div>
        <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          <LinkedinLink>
            Development of applications for the main mining companies in the country, focusing on managing iron ore
            production and online control of all machines using .NET stack, SQL Server, Postgres, and internal network
            protocols.
          </LinkedinLink>
        </div>
      </div>
    </section>
  )
}
