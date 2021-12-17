<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title>My files</v-toolbar-title>
      <!-- <v-container class=" text-center"> <span class="overline font-weight-black">MINHA LISTA DE TAREFAS</span></v-container> -->
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item 
            v-for="nave in nav"
            :key="nave.title"
            link :to="nave.to"
            class="mx-4"
            icon>
              <v-list-item-title>{{nave.title}}</v-list-item-title>
            </v-list-item>
  
           
  
            
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      

    </v-main>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
      class="pa-0"
      
      
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center ma-0"
        color="deep-purple accent-4"
        dark
      >
        <v-card-text>
          <v-btn
            v-for="item in items"
            :key="item.title"
            link :to="item.to"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-account-circle',
        'mdi-exit-to-app',
      ],
      items: [
        {title: "Home", icon: "mdi-home", to: "/"},
        {title: "Calendário", icon: "mdi-calendar", to: "/calendario"},
        {title: "Perfil", icon: "mdi-account-circle", to: "/perfil"},
        {title: "Sair", icon: "mdi-exit-to-app", to: "/login"},
      ],
      nav: [
        {title: "Home", to: "/"},
        {title: "Calendario", to: "/calendario"},
        {title: "Meu perfil", to: "/perfil"},
        {title: "Sair", to: "/login"},
      ],
      padless: false,
      variant: 'fixed',
      drawer: false,
      group: null,
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>

</style>
