<template>
  <div />
</template>

<script>
  export default {
    name: 'WebSocketConnector',
    mounted() {
        const exampleSocket = new WebSocket("ws://localhost:5397/websocket/ui");
        exampleSocket.onmessage = (event) => {
          
            console.warn("event", event)
            const data = JSON.parse(event.data)
            console.log("event.data", data)
            switch(data.topic) {
                case "SessionInfo": this.$store.commit("setSession", rawSessionData); break;
                case "LiveStandings": this.$store.commit("setDriverData", rawStandingsData); break;
            }
        }
    },
  }
</script>
