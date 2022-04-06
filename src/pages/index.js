import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const heading1Styles = {
  color: "black"
}
const headingAccentStyles = {
  color: "#663399",
  fontSize: "1.5rem"
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  color: "#000",
}

const roleStyles = {
  fontWeight: 300,
  fontSize: 14,
  fontWeight: "bold",
  color: "#A0A0A0"
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const experiences = [
  {
    company: "VTEX",
    companyUrl: "https://vtex.com/us-en/",
    role: "Senior Software Developer [Team Lead]",
    from: "July 2012",
    to: "Present"
  },
  {
    company: "Caos! Design",
    companyUrl: "http://caosdesign.com.br/",
    role: "Business Partner and Tech Lead",
    from: "June 2009",
    to: "June 2012"
  },
  {
    company: "Ceperj",
    companyUrl: "https://www.ceperj.rj.gov.br/",
    role: "System Administrator",
    from: "May 2008",
    to: "May 2009"
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Afonso Praça</title>
      <h1 style={headingStyles}>
        Afonso Praça
        <br />
        <span style={headingAccentStyles}>building software and businesses</span>
      </h1>
      <h2 style={heading1Styles}>Experience</h2>
      <ul style={listStyles}>
        {experiences.map(experience => (
          <li key={experience.companyUrl} style={{ ...listItemStyles}}>
            <span>
              <a
                style={linkStyle}
                href={`${experience.companyUrl}?utm_source=afonsopraca&utm_medium=start-page&utm_campaign=afonsopraca`}
                target="_blank"
              >
                {experience.company}
              </a> - <span style={{ ...roleStyles}}>{experience.role}</span>
              <p style={descriptionStyle}>{experience.from} - {experience.to}</p>
            </span>
          </li>
        ))}
      </ul>
      <h2 style={heading1Styles}>Contacts</h2>
      <span>+55 21 979 151515</span><br/>
      <span>afonsoinfo@gmail.com</span>
    </main>
  )
}

export default IndexPage
