<template>
  <v-data-table
    :headers="headers"
    :items="drivers"
    class="driverTable elevation-1"
    disable-sort
    dense
    :items-per-page="-1"
    :sort-by="['Position']"
    hide-default-footer
  >
  <template v-slot:item.penalties="{ item }">
    <v-chip
      :color="getColor(item.penalties)"
      dark
    >
      {{ item.penalties>0 ? "Yes" : "No" }}
    </v-chip>
  </template>
</v-data-table>
</template>

<script>
  export default {
    name: 'DriverTable',
    props: {
      drivers: {
        type: Array,
        required: true
      },
    },
    data () {
      return {
        headers: [
          {
            text: 'Position',
            align: 'center',
            value: 'position',
            width: 10,
          },
          { 
            text: 'Number',
            value: 'carNumber',
            align: 'center',
            width: 10,
            divider: true
          },
          { text: 'Name', value: 'driverName', },
          { text: 'Team', value: 'fullTeamName', divider: true },
          { text: 'Laps', value: 'completedLaps',width: 10, align: 'center' },
          { text: 'Gap', value: 'gap',width: 10, align: 'center' },
          { text: 'Interval', value: 'interval',width: 10, align: 'center' },
          { text: 'Current', value: 'currentLap',width: 10, align: 'center' },
          { text: 'Estimated', value: 'estimatedLap',width: 10, align: 'center' },
          { text: 'Last', value: 'lastLap',width: 10, align: 'center' },
          { text: 'Best', value: 'bestLap',width: 10, divider: true, align: 'center' },
          { text: 'Pit State', value: 'pitState',

          align: 'center',
            width: 10, },
          { text: 'Stops', value: 'pitstops',
            align: 'center', 
            width: 10,},
          { text: 'Penalty', value: 'penalties' ,
            align: 'center',
            width: 50,},
        ],
      }
    },
    methods: {
      getColor (penalties) {
        if (penalties > 0) return 'red'
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
