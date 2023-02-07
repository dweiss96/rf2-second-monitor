<template>
  <v-data-table
    :headers="headers"
    :items="[session]"
    class="driverTable elevation-1"
    disable-sort
    dense
    :items-per-page="1"
    hide-default-footer
  >
</v-data-table>
</template>

<script>
  export default {
    name: 'SessionData',
    props: {
      session: {
        type: Object,
        required: true
      },
    },
    data () {
      return {
        headers: [
          { text: 'Circuit', value: 'trackName' },
          { text: 'Remaining Time', value: 'remainingTime', width: 10},
          { text: 'Session', value: 'session', width: 10, divider: true },
          
          { text: 'Wind', value: 'windSpeedVelocity',width: 10, align: 'center'},
          { text: 'Track', value: 'trackTemp',width: 10, align: 'center'},
          { text: 'Air', value: 'ambientTemp',width: 10, align: 'center', divider: true },
          
          { text: 'Rain', value: 'raining',width: 10, align: 'center'},

          { text: 'Yellow', value: 'sectorFlags' ,
            align: 'center',
            width: 100,
          },
        ],
      }
    },
    methods: {
      getColor (pens) {
        if (pens > 0) return 'red'
        else return 'darkgrey'
      },
    },
  }
</script>

<style>
.driverTable tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .5);
}
</style>
