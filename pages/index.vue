<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-timeline>
        <v-timeline-item>Git initialize</v-timeline-item>
        <v-timeline-item class="text-right"
          >First commit pushed</v-timeline-item
        >
        <v-timeline-item>Clean default template layout</v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  target: 'static',
}
</script>
