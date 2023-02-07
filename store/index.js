// Create a new store instance.
export const state = () => ({
  session: {},
  drivers: []
})
export const mutations = {
  setSession (state, sessionData) {
    state.session = sessionData
  },
  setDriverData (state, driverData) {
    state.drivers = driverData
  }
}