function delay(duration) {
  // Do magic with `new Promise` and `setTimeout`
  return new Promise((succeed, fail) => {
    // We do our work, which accepts a callback function
    setTimeout(
      // The function that is called after a timeout of `duration`
      () => {
        // Can’t fail, so just call succeed/resolve
        succeed()
      },
      // Tell setTimeout how long to wait for
      duration
    )
  })
}

console.time('delay 2000ms')
const aPromise = delay(2000)

aPromise.then(() => {
  console.timeEnd('delay 2000ms')
})