  <template>
  <v-app>
    <v-app-bar app class="indigo lighten-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meet Ups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text>
          <v-icon left>group</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn text>
              <v-icon left>group</v-icon>
              View Meetups
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
  <!-- <v-main>
    <v-navigation-drawer
      height="1000"
      v-model="drawer"
      class="red"
      absolute
      temporary
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn text>
              <v-icon left>group</v-icon>
              View Meetups
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Meetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text>
          <v-icon left>group</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-main> -->
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },

  components: {},
};
</script>
