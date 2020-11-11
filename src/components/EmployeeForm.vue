<template>
    <div>
        <div class="employee-form p20 ac">
            <v-form>
                <v-card class="p15 mt-10">

                    <h2>Cadastrar novo funcionário</h2>

                    <v-text-field 
                        v-model="employeData.name" 
                        label="Nome" 
                        color="orange" 
                        required
                    ></v-text-field>

                    <v-text-field 
                        v-model="employeData.office" 
                        label="Cargo" 
                        color="orange" 
                        required
                    ></v-text-field>


                    <div align="center">
                        <v-btn 
                            class="ac mt-4 mb-6" 
                            color="orange" 
                            @click="createEmploye()" 
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
export default {
    data:() => ({
        employeData:{
            name:'',
            office:'',
        }
    }),

    methods:{
        createEmploye(){
            console.log("deve criar novo employee")
        }
    }
}
</script>
<style lang="scss">
.employee-form{
    max-width: 30%;
    width: 100%;

    @media screen and (max-width: 700px) {
        max-width: 90%;
        width: 100%;
    }
}
</style>