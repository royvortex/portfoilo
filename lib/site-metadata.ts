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
  initials: "AR",
  headline: "Full Stack & Minecraft Developer",
  tagline: "Building immersive experiences in Minecraft and on the Web",
  description: "Aarav Roy, a full stack developer with extensive experience in Minecraft server development and web technologies.",
  email: "royaarav.vrtx@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/royvortex",
      icon: "GH",
    }
  ],
}

export default siteMetadata
