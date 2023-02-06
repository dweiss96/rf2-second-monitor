<template>
  <div>
    <SessionData :session="sessionData"/>
    <DriverTable :drivers="driverData"/>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com')
    
      return { ip }
    },

    data() {
      return {
        sessionData: {
          "trackName": "Road Atlanta GP Course",
          "session": "PRACTICE1",
          "remainingTime": "2:37:44",
          "remainingLaps": 57,
          "numberOfVehicles": 63,
          "yellowFlagState": "NONE",
          "sectorFlag": [
            "UNKNOWN",
            "UNKNOWN",
            "UNKNOWN"
          ],
          "darkCloud": 0.0,
          "raining": 100,
          "ambientTemp": "25.8°C",
          "trackTemp": "28.5°C",
          "windSpeedVelocity": 0.0,
          "minPathWetness": 15,
          "averagePathWetness": 60,
          "maxPathWetness": 100
        },
        driverData: [
          {
            "position": 0,
            "carNumber": "01",
            "driverName": "Gabi Gasfuss",
            "fullTeamName": "Audi",
            "gap": "1:55.3",
            "interval": "1:45.3",
            "currentLap": "13:55.3",
            "estimatedLap": "13:55.3",
            "bestLap": "13:55.3",
            "lastLap": "13:55.3",
            "pitState": "EXITING",
            "sector": "SECTOR1",
            "pitstops": 33,
            "penalties": 0,
            "qualification": 1,
            "slotID": 33,
            "pitGroup": "Group1",
            "inGarageStall": false,
            "finishStatus": "FSTAT_NONE"
          },
          {
            "position": 1,
            "carNumber": "512",
            "driverName": "Gernhart Reinlunzen",
            "fullTeamName": "Audi",
            "gap": "333L",
            "interval": "222L",
            "currentLap": "",
            "estimatedLap": "",
            "bestLap": "",
            "lastLap": "",
            "pitState": "EXITING",
            "sector": "SECTOR1",
            "pitstops": 0,
            "penalties": 3,
            "qualification": 1,
            "slotID": 33,
            "pitGroup": "Group1",
            "inGarageStall": false,
            "finishStatus": "FSTAT_NONE"
          }
        ],
      }
    }
  }
</script>
