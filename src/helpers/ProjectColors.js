import { palette } from '../theme/palette'

export const ProjectColors = (project) => {
  return palette.find((c) => c.mainColor === project.color)
}
