<template>
    <div>
        <div class="project-form p20 ac">
            <v-form>
                <v-card class="p15 mt-10">

                    <h2>Cadastrar novo projeto</h2>

                    <v-text-field 
                        v-model="projectFormData.name" 
                        label="Nome" 
                        color="orange" 
                        required
                    ></v-text-field>

                    <v-textarea
                        outlined
                        color="orange" 
                        required
                        v-model="projectFormData.description" 
                        label="Descrição" 
                        name="input-7-4"
                    ></v-textarea>

                    <v-text-field 
                        type="tel"
                        v-mask="'##/##/####'"
                        v-model="projectFormData.finalDate" 
                        label="Data final do projeto"
                        :rules="dateRules"
                        color="orange" 
                        required
                    ></v-text-field>

                    <v-text-field 
                        type="tel"
                        v-mask="'##/##/####'"
                        v-model="projectFormData.previsionDate"
                        label="Previsão de entrega do projeto"
                        :rules="dateRules"
                        color="orange" 
                        required
                    ></v-text-field>

                    <div align="center">
                        <v-btn 
                            class="ac mt-4 mb-6" 
                            color="orange" 
                            @click="createNewProject()" 
                            dark
                            outlined
                        >Criar</v-btn>
                    </div>

                </v-card>
            </v-form>
        </div>
    </div>
</template>
<script>
import { TheMask } from 'vue-the-mask';

export default {

    components:{
        TheMask
    },

    data:() => ({
        
        dateRules: [
            value => !!value || 'Necessário.',
            value => (value && value.length < 11) || 'Necessário preencher com um valor válido.',
        ],

        projectFormData:{
            name:'',
            description:'',
            finalDate:'',
            previsionDate:'',
        }
    }),

    methods:{
        createNewProject(){
            console.log("deve criar novo employee")
        }
    }
}
</script>
<style lang="scss">
.project-for{
    max-width: 30%;
    width: 100%;

    @media screen and (max-width: 700px) {
        max-width: 90%;
        width: 100%;
    }
}
</style>