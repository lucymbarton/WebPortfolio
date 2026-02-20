import * as Accordion from '@radix-ui/react-accordion'
import '../App.css'

const experience = [
  {
    id: 'ncino',
    company: 'nCino',
    logo: '/logos/ncino.png',
    dateRange: 'May 2022 – Present',
    roles: [
      {
        title: 'Software Engineer',
        dateRange: 'Dec 2024 – Present',
        bullets: [
          'Built and shipped a client-facing Vue UI for notification settings, improving usability and reducing support requests',
          'Recognized as subject matter expert for all team-owned services',
          'Led technical reviews and troubleshooting efforts across multiple product areas',
          'Utilized AI-assisted development tools (Claude/Cursor) to save multiple hours per week',
          'Mentored new team members after large organizational adjustment',
        ],
      },
      {
        title: 'Associate Software Engineer',
        dateRange: 'Jan 2024 – Dec 2024',
        bullets: [
          'Designed and implemented Role-Based Access Control (RBAC) infrastructure',
          'Consistently top committer and contributor across our repository, known for code quality and delivery speed',
          'Led development work on allowing company admins to delete users, improving compliance with data retention policies and reducing support requests',
          'Implemented and maintained integrations with third party software (Twilio, NetSuite), reducing manual work previously done by engineers',
        ],
      },
      {
        title: 'Software Engineer – Intern',
        dateRange: 'May 2022 – Jan 2024',
        bullets: [
          'Collaborated using Jira and GitLab to create software for mortgage company admins using Vue and Ruby',
          'Deployed changes multiple times a week through CI/CD pipelines',
          'Wrote Cypress end-to-end tests to ensure site reliability',
          'Led development of a large-scale self-service dashboard, improving client task completion rates and reducing support requests',
        ],
      },
    ],
  },
  {
    id: 'byu',
    company: 'BYU Office of Information Technology',
    logo: '/logos/byu.png',
    dateRange: 'June 2019 – March 2020 & Aug 2021 – May 2022',
    roles: [
      {
        title: 'Computer Programmer',
        dateRange: null,
        bullets: [
          'Worked with a team to develop and maintain apps for the University using Vue, TypeScript, Java, Kotlin',
          'Followed Agile methodologies and used GitHub for code collaboration',
          'Revised web pages and systems now used by every student at BYU',
        ],
      },
    ],
  },
  {
    id: 'mathnasium',
    company: 'Mathnasium',
    logo: '/logos/mathnasium.png',
    dateRange: 'May 2018 – June 2019',
    roles: [
      {
        title: 'Instructor',
        dateRange: null,
        bullets: [
          'Worked with up to four students at a time, teaching, correcting, and entertaining',
          'Completed administrative tasks such as organizing binders and entering data into the computer',
        ],
      },
    ],
  },
]

const skills = [
  "Claude", "Cursor", 'Ruby', 'Ruby on Rails', 'JavaScript', 'TypeScript', 'Cypress',
  'HTML', 'CSS', 'Vue', 'Vuetify', 'React', 'C', 'C++', 'SQL', 'MySQL',
  'IntelliJ', 'VS Code', 'TablePlus', 'Linux (bash)', 'Git', 'GitHub', 'GitLab',
  'AWS', 'Jira',  'Java', 'Kotlin', 
]

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Experience() {
  return (
    <main>
      <section className="section experience-section">
        <h2>EXPERIENCE</h2>
        <div className="experience-content">
          <Accordion.Root type="multiple" className="experience-accordion">
            {experience.map((job) => (
              <Accordion.Item key={job.id} value={job.id} className="experience-panel">
                <Accordion.Header className="experience-panel-header">
                  <Accordion.Trigger className="experience-trigger">
                    <img
                      src={job.logo}
                      alt=""
                      className="experience-logo"
                    />
                    <span className="experience-trigger-title">{job.company}</span>
                    <span className="experience-trigger-date">{job.dateRange}</span>
                    <ChevronDownIcon className="experience-chevron" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="experience-content-inner">
                  <div className="accordion-content-body">
                    <h3 className="job-company">{job.company}</h3>
                    {job.roles.map((role, j) => (
                    <div key={j} className="job-role">
                      <div className="role-title-row">
                        <h4 className="role-title">{role.title}</h4>
                        {role.dateRange && (
                          <span className="role-date">{role.dateRange}</span>
                        )}
                      </div>
                      <ul className="role-bullets">
                        {role.bullets.map((bullet, k) => (
                          <li key={k}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="section skills-section">
        <h2>SKILLS & TECHNOLOGIES</h2>
        <div className="skills-tags">
          {skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
