  <template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
      >
        <v-list-tile>
          <v-list-tile-action>
            <v-btn text>
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="indigo lighten-4">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >Meet Ups</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      menuItems: [
        { icon: "group", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Sign Up", link: "/signup" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
      ],
    };
  },

  components: {},
};
</script>
