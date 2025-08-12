export type CandidateProfile = {
  initials?: string
  title: string
  salaryExpectation?: string
  availability?: string
  location?: string
  experienceYears?: string
  contactPerson?: {
    name?: string
    phone?: string
    email?: string
    website?: string
  }
  profileSummary?: string[]
  topSkills?: { id?: string; name: string; description?: string }[]
  qualifications?: string[]
  personalDetails?: { label: string; value: string }[]
  itSkills?: { skill: string; level?: string }[] | undefined
  techSkills?: { skill: string; level?: string }[] | undefined
  languages?: { lang: string; level?: string }[]
  education?: string[]
  keyProjects?: {
    id?: string
    title: string
    category?: string
    description?: string
    tags?: string[]
    scope?: string
  }[]
  experienceTimeline?: {
    id?: string
    dateRange?: string
    title: string
    description?: string
  }[]
  careerGoals?: { title: string; description?: string }[]
  interests?: { name: string }[]
  personalityTraits?: string[]
  motivationFactors?: string[]
}
