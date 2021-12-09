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
             <v-text-field class="deep-purple--text text--accent-4" color="deep-purple" label="Senha" v-model="user.password">

            </v-text-field>
          </v-form>
        </v-col>
      </v-row>



    </v-container>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      user: {},
      show: false,
    }
  },


}
</script>

<style>

</style>