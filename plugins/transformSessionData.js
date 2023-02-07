function transformSecondsToTime(seconds) {
  const hours = Math.floor(seconds/(60*60))
  const restMinutes = (seconds - (hours*(60*60)))
  const minutes = Math.floor(restMinutes/60)
  const restSeconds = (seconds - (minutes*60)).toFixed(0)
  const secondsString = restSeconds < 10 ? `0${restSeconds}` : restSeconds
  return `${hours}:${minutes}:${secondsString}`
}

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('transformSessionData', rawData => {
    return {
      trackName: rawData.trackName,
      session: rawData.session,
      windSpeedVelocity: rawData.windSpeed,

      remainingTime: transformSecondsToTime(rawData.timeRemainingInGamePhase),

      raining: rawData.raining,

      trackTemp: `${rawData.trackTemp.toFixed(1)}°C`,
      ambientTemp: `${rawData.ambientTemp.toFixed(1)}°C`,

      sectorFlag: rawData.sectorFlag,
    }
  })
}
