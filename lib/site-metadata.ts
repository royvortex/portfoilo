interface SiteMetadata {
  name: string
  initials: string
  headline: string
  tagline: string
  description: string
  email: string
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

const siteMetadata: SiteMetadata = {
  name: "Aarav Roy",
  initials: "Aarav Roy",
  headline: "Full Stack Developer",
  tagline: "Experience in server and web dev",
  description: "Aarav Roy, a full stack developer specializing Frontend and Backend.",
  email: "royaarav.vrtx@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "GH",
    }
  ],
}

export default siteMetadata
