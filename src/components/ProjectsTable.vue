<template>
  <v-card max-width="1300" class="ac mt-8">

    <v-row align="center">
      <v-col align="center" class="text-center ml-a">
        <v-btn color="success">
          <v-icon>mdi-plus</v-icon>
            Novo
        </v-btn>
      </v-col>
    </v-row>

    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      
      :headers="headers"
      :items="desserts"
      :search="search"
    >
    
    <template v-slot:[`item.actions`]="{ item }">

      <v-btn class='ml-1' color="purple" dark>
        <span :id='item'></span>
        <v-icon>mdi-eye</v-icon>
      </v-btn>

      <v-btn class='ml-1' color="purple" dark>
        <span :id='item'></span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class='ml-1' color="purple" dark>
        <span :id='item'></span>
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>

    </template>
    
    
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Cód',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Projeto', value: 'name' },
          { text: 'Inicio', value: 'created_at' },
          { text: 'Previsão', value: 'should_finish' },
          { text: 'Fim', value: 'finish' },
          { text: 'Status', value: 'status' },
          { text: 'Orçamento', value: 'amount' },
          { text: 'Risco', value: 'Risk' },
          { text: 'Gerente', value: 'manager' },
          { text: 'Ações', value: 'actions' },
        ],
        desserts: [
          {
            id: 1,
            name: "Novo app com IA",
            created_at: '09/06/2020',
            should_finish: '20/12/2021',
            finish: '10/03/2022',
            status: 'Em andamento',
            amount: 'R$ 10.000,00',
            Risk: 'Médio Risco',
            manager: 'Pedro Lopes',
          },
        ],
      }
    },
  }
</script>