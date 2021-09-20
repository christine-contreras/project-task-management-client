import { palette } from './palette'

export const ProjectColors = (project) => {
  return palette.find((c) => c.mainColor === project.color)
}
