<template>
  <v-container fill-height fluid text-center>
    
  
    <v-container>
      <v-row>
        <v-col class="deep-purple--text text-center mx-auto pb-4" cols="1" sm="4" offset="4"><h1 class="h1">Login</h1></v-col>

      </v-row>
      <v-row class="elevation-3 mx-auto">
        <v-col cols="auto">
          <v-img max-height="100%" max-width="200px" src="@/assets/logo.png"></v-img>
        </v-col>
        <v-col>
          <v-form>
            <v-text-field class="deep-purple--text text--accent-4" color="deep-purple" label="Email" v-model="user.email">
              

            </v-text-field>
             <v-text-field class="deep-purple--text text--accent-4" color="deep-purple" label="Senha" v-model="user.password" append-icon="mdi-eye"
             :type="show ? 'text ': 'password' " @click:append="show = !show"   >

            </v-text-field>
            <v-btn
              
              color="deep-purple"
              class="mr-4"
              @click="login"
              
            >
              Entrar
            </v-btn>
                        <v-btn
              
              color="error"
              class="mr-4"
              @click="reset"
              
            >
              Resetar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>



    </v-container>
    <v-snackbar color="red" v-model="errorLogin"  danger multline timout="2000"> Usuário ou senha inválidos</v-snackbar>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      user: {},
      show: false,
      errorLogin: false
    }
  },
  methods: {
    reset() {
      this.user = {};
    },
    login() {
      if(this.user.email === 'kauane' && this.user.password === 'kauane') {
        this.$router.push({name: "Home"});
      } else {
        this.errorLogin = true;
      }
    }
  }


}
</script>

<style>

</style>