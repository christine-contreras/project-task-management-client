import * as React from 'react'
import lightTheme from './theme/light-theme'
import darkTheme from './theme/dark-theme'
import Projects from './containers/Projects'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import Box from '@mui/material/Box'

const App = () => {
  const [mode, setMode] = React.useState(true)
  const appliedTheme = createTheme(mode ? lightTheme : darkTheme)

  const toggleTheme = () => {
    setMode(!mode)
  }

  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = () => {
    fetch('http://localhost:9393/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
  }

  const patchProjects = (project) => {
    fetch(`http://localhost:9393/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        favorite: project.favorite,
        title: project.title,
      }),
    })
  }

  const handleDeleteProject = (deleteProject) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deleteProject.id
    )

    fetch(`http://localhost:9393/projects/${deleteProject.id}`, {
      method: 'DELETE',
    })

    setProjects(updatedProjects)
  }

  const handleFavoringAProject = (favProject) => {
    const updatefavProject = { ...favProject, favorite: !favProject.favorite }

    patchProjects(updatefavProject)

    const updatedProjects = projects.map((project) =>
      project.id === favProject.id ? updatefavProject : project
    )
    setProjects(updatedProjects)
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Router>
          <Layout toggleTheme={toggleTheme} mode={mode} projects={projects}>
            <Route
              exact
              path='/projects'
              render={(routerProps) => (
                <Projects
                  {...routerProps}
                  projects={projects}
                  handleFavoringAProject={handleFavoringAProject}
                  handleDeleteProject={handleDeleteProject}
                />
              )}
            />
          </Layout>
        </Router>
      </Box>
    </ThemeProvider>
  )
}
export default App
