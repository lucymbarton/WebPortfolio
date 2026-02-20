import * as Accordion from '@radix-ui/react-accordion'
import '../App.css'

const education = [
  {
    id: 'byu',
    school: 'Brigham Young University',
    logo: '/logos/byu.png',
    date: '2019 - 2023',
    degree: 'BS Computer Science',
    details: '3.7 GPA',
  },
  {
    id: 'slcc',
    school: 'Salt Lake Community College',
    logo: '/logos/slcc.png',
    date: '2015 - 2019',
    degree: 'AS General Studies',
    details: '3.9 GPA, High Honors',
  },
]

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Education() {
  return (
    <main>
      <section className="section experience-section">
        <h2>EDUCATION</h2>
        <div className="experience-content">
          <Accordion.Root type="multiple" className="experience-accordion">
            {education.map((item) => (
              <Accordion.Item key={item.id} value={item.id} className="experience-panel">
                <Accordion.Header className="experience-panel-header">
                  <Accordion.Trigger className="experience-trigger">
                    <img
                      src={item.logo}
                      alt=""
                      className="experience-logo"
                    />
                    <span className="experience-trigger-title">{item.school}</span>
                    <span className="experience-trigger-date">{item.date}</span>
                    <ChevronDownIcon className="experience-chevron" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="experience-content-inner">
                  <div className="accordion-content-body">
                    <h3 className="job-company">{item.school}</h3>
                    <div className="education-details">
                      <p className="education-degree">{item.degree}</p>
                      {item.details && (
                        <p className="education-meta">{item.details}</p>
                      )}
                      <p className="education-date">{item.date}</p>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </main>
  )
}
