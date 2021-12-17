<template>
  <v-container class="text-center pa-8 fluid">
      <h2 class="h2">MINHA LISTA DE TAREFAS</h2>
      <v-form>
          <v-text-field label="Nova Tarefa" class="deep-purple--text text--accent-4" color="deep-purple" v-model="novaTarefa" @keydown.enter="adicionar" > 
              <v-icon slot="append" @click="adicionar" >mdi-send</v-icon>
          </v-text-field>
          <v-list>
              <v-list-item-group>
                <v-list-item v-for="tarefa in tarefas" :key="tarefa.id"  > {{tarefa.titulo}}
                    <v-btn absolute right depressed icon @click="deletar(tarefa.id)">
                        <v-icon dark>
                            mdi-delete
                         </v-icon>
                    </v-btn>
                </v-list-item>

              </v-list-item-group>
          </v-list>
      </v-form>
  </v-container>

</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
    data() {
        return {
            uid: "",
            novaTarefa: "",
            tarefas: [
                
            ]

        }
    },
    mounted() {
        this.uid = fb.auth.currentUser.uid;
        this.lerTarefas()
    },
    methods: {
        async lerTarefas() {
            this.tarefas = []
            const logTasks = await fb.tasksCollection.where('proprietario', "==", this.uid)
            .get();
        for (const doc of logTasks.docs) {
            this.tarefas.push({
                id: doc.id,
                titulo: doc.data().titulo,
            })
        }

        },
        async adicionar() {
            await fb.tasksCollection.add({
                titulo: this.novaTarefa,
                dataGravacao: new Date().toISOString().slice(0, 10),
                proprietario: this.uid,
            });
            this.novaTarefa = "";
            this.lerTarefas();
        },
        async deletar(id) {
            await fb.tasksCollection.doc(id).delete();
            this.lerTarefas();
        },

        
    }
}
</script>

<style>

</style>