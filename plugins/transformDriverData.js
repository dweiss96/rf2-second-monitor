function transformSecondsToTime(seconds, decimalPlaces = 3) {
  if(seconds > ((99*60)+99.9)) {
    return "99:99.9"
  }
  const minutes = Math.floor(seconds/60)
  const restSeconds = (seconds - (minutes*60)).toFixed(decimalPlaces)
  return `${minutes}:${restSeconds}`
}

function transformDistance(time, laps) {
  if(laps > 0) {
    return `${laps}L`
  }
  return transformSecondsToTime(time)
}

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('transformDriverData', rawData => rawData.map(rawItem => {
    
    
    return {
      position: rawItem.position,
      carNumber: rawItem.carNumber,

      driverName: rawItem.driverName,
      fullTeamName: rawItem.fullTeamName,

      completedLaps: rawItem.lapsCompleted,

      gap: transformDistance(rawItem.timeBehindLeader,rawItem.lapsBehindLeader),
      interval: transformDistance(rawItem.timeBehindNext,rawItem.lapsBehindNext),
      
      currentLap: transformSecondsToTime(rawItem.timeIntoLap, 1),
      estimatedLap: transformSecondsToTime(rawItem.estimatedLapTime),
      lastLap: transformSecondsToTime(rawItem.lastLapTime),
      bestLap: transformSecondsToTime(rawItem.bestLapTime),
      
      pitState: rawItem.pitState,
      pitstops: rawItem.pitstops,
      penalties: rawItem.penalties,
    }
  }))
}
