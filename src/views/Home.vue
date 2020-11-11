<template>
  <div class="home">
    <ToolBar/>
    <v-card class="alg-txt-c ac  mt-10 card-4">
      <h1>Projetos</h1>
    </v-card>

    <ProjectsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from '../components/ToolBar'
import ProjectsTable from '../components/ProjectsTable'

export default {
  name: 'Home',
  components: {
    ToolBar,
    ProjectsTable
  }
}
</script>
