let value = 0
console.log(value)

document.getElementById('plus-btn').addEventListener('click', () => {
  value++
  document.getElementById('value').innerHTML = value
})

document.getElementById('minus-btn').addEventListener('click', () => {
  value--
  document.getElementById('value').innerHTML = value
})

document.getElementById('reset-btn').addEventListener('click', () => {
  value = 0
  document.getElementById('value').innerHTML = value
})
