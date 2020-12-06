<template>
  <v-container>
    <v-layout row wrap mb-3 mt-3>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn
          xs12
          sm6
          large
          router
          to="/meetups"
          class="indigo lighten-4 text-sm-right mr-5"
        >
          View Meetups
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn
          xs12
          sm6
          large
          router
          to="/meetup/new"
          class="indigo lighten-4 text-sm-left"
        >
          Organize Meetup
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in meetup"
            :key="item.id"
            :src="item.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div class="title">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetup: [
        {
          imageUrl:
            "https://static.amazon.jobs/locations/58/images/NYC.jpg?1547618121",
          id: 1,
          title: "meetups in new york",
        },
        {
          imageUrl:
            "https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?k=6&m=946087016&s=612x612&w=0&h=FPq454ti8ZKPiMzyDPJ_A4BNQaN-2olcfg4TYgMFR1w=",
          id: 2,
          title: "meetups in Paris",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
}
</style>
