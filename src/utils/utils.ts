export const skillsMap = (skills: any) =>
  Object.keys(skills)
    .filter(skill => skills[skill])
    .join(', ')
