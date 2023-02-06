export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('transformSessionData', rawData => {
    return {
      trackName: rawData.trackName,
      session: rawData.session,
      numberOfVehicles: rawData.numberOfVehicles,
      windSpeedVelocity: rawData.windSpeed.velocity.toFixed(1),

      raining: rawData.raining,
      minPathWetness: rawData.minPathWetness,
      averagePathWetness: rawData.averagePathWetness,
      maxPathWetness: rawData.maxPathWetness,

      trackTemp: `${rawData.trackTemp.toFixed(1)}°C`,
      ambientTemp: `${rawData.ambientTemp.toFixed(1)}°C`,

      yellowFlagState: rawData.yellowFlagState,
      sectorFlag: rawData.sectorFlag,
    }
  })
}
