<template>
  <div class="home">
    <ToolBar/>

    <v-card class="alg-txt-c ac  mt-10 card-4">
      <h1>Projetos</h1>
    </v-card>


  <v-card max-width="1300" class="ac mt-8">

      <v-row align="center">
        <v-col align="center" class="text-center ml-a">
          <v-btn color="success" @click="newProject = true">
            <v-icon>mdi-plus</v-icon>
              Novo
          </v-btn>
        </v-col>
      </v-row>

      <ProjectsTable/>


        <v-dialog v-model="newProject" width="500">
            <v-card>
                <v-toolbar dark color="orange" class="title">
                    <v-toolbar-title>Criar novo projeto</v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon dark @click="newProject = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

              <ProjectsForm/>

            </v-card>
        </v-dialog>

  </v-card>
  
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from '../components/ToolBar'
import ProjectsTable from '../components/ProjectsTable'
import ProjectsForm from '../components/ProjectForm'

export default {
  name: 'Home',
  components: {
    ToolBar,
    ProjectsTable,
    ProjectsForm
  },

  data:() => ({
    newProject: false
  })
}
</script>
