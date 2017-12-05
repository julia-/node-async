function delay(duration) {
  // Do magic with `new Promise` and `setTimeout`
  return new Promise((succeed, fail) => {
    // We do our work, which accepts a callback function
    setTimeout(
      // The function that is called after a timeout of `duration`
      succeed,
      // Tell setTimeout how long to wait for
      duration
    )
  })
}

console.time('delay 400ms')
console.time('delay 400ms+500ms')
console.time('delay 400ms+500ms+700ms')

const delay400 = delay(400)

delay400.then(() => {
  // After the first delay has finshed
  console.timeEnd('delay 400ms')

  // delay500 starts
  console.time('delay 500ms')
  const delay500 = delay(500)
  delay500.then(() => {
    console.timeEnd('delay 500ms')
    console.timeEnd('delay 400ms+500ms')

    // delay700 starts
    console.time('delay 700ms')
    const delay700 = delay(700)
    delay700.then(() => {
      console.timeEnd('delay 700ms')
      console.timeEnd('delay 400ms+500ms+700ms')
    })
  })
})