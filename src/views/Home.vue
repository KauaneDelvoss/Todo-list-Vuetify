<template>
  <v-container class="text-center pa-8 fluid">
      <h2 class="h2">MINHA LISTA DE TAREFAS</h2>
      <v-form>
          <v-text-field label="Nova Tarefa" class="deep-purple--text text--accent-4" color="deep-purple" v-model="novaTarefa" @keydown.enter="adicionar" > 
              <v-icon slot="append" @click="adicionar" >mdi-send</v-icon>
          </v-text-field>
          <v-list>
              <v-list-item-group>
                  <v-list-item v-for="tarefa in tarefas" :key="tarefa.titulo"> {{tarefa.titulo}} </v-list-item>

              </v-list-item-group>
          </v-list>
      </v-form>
  </v-container>

</template>

<script>
export default {
    data() {
        return {
            novatarefa: "",
            tarefas: [
                {titulo: "Tarefa 1"},
                {titulo: "Tarefa 2"},
                {titulo: "Tarefa 3"}
            ]

        }
    },
    methods: {
        adicionar(e) {
            e.preventDefault();
            this.tarefas.push ({titulo: this.novaTarefa})
            this.novaTarefa = "";
        }
    }
}
</script>

<style>

</style>