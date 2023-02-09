<template>
  <v-data-table
    :headers="headers"
    :items="drivers"
    class="driverTable elevation-1"
    dense
    :items-per-page="-1"
    :sort-by="['position']"
    hide-default-footer
  >
    <template v-slot:item.penalties="{ item }">
      <v-chip :color="getColor(item.penalties)" dark>
        {{ item.penalties > 0 ? 'Yes' : 'No' }}
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
      required: true,
    },
  },
  data() {
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
          sortable: false,
          value: 'carNumber',
          align: 'center',
          width: 10,
          divider: true,
        },
        { text: 'Name', value: 'driverName', sortable: false },
        { text: 'Team', value: 'fullTeamName', sortable: false, divider: true },
        {
          text: 'Laps',
          value: 'completedLaps',
          width: 10,
          sortable: false,
          align: 'center',
        },
        {
          text: 'Gap',
          value: 'gap',
          width: 10,
          sortable: false,
          align: 'center',
        },
        {
          text: 'Interval',
          value: 'interval',
          sortable: false,
          width: 10,
          align: 'center',
        },
        {
          text: 'Current',
          value: 'currentLap',
          sortable: false,
          width: 10,
          align: 'center',
        },
        // { text: 'Estimated', value: 'estimatedLap',width: 10, align: 'center' },
        {
          text: 'Last',
          value: 'lastLap',
          sortable: false,
          width: 10,
          align: 'center',
        },
        {
          text: 'Best',
          value: 'bestLap',
          sortable: false,
          width: 10,
          divider: true,
          align: 'center',
        },

        {
          text: 'Front Tire',
          value: 'frontTire',
          sortable: false,
          width: 10,
          align: 'center',
        },
        {
          text: 'Rear Tire',
          value: 'rearTire',
          sortable: false,
          width: 10,
          align: 'center',
        },
        {
          text: 'Pit State',
          value: 'pitState',
          sortable: false,

          align: 'center',
          width: 10,
        },
        {
          text: 'Stops',
          value: 'pitstops',
          sortable: false,
          align: 'center',
          width: 10,
        },
        {
          text: 'Penalty',
          value: 'penalties',
          sortable: false,
          align: 'center',
          width: 50,
        },
      ],
    }
  },
  methods: {
    getColor(penalties) {
      if (penalties > 0) return 'red'
      else return 'darkgrey'
    },
  },
}
</script>

<style>
.driverTable tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
