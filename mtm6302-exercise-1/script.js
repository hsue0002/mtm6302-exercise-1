const $emojis =
  document.getElementById('emojis')
const emojis = []

for (let i = 129409; i < 129511; i++) {
  emojis.push(`
    <div class="box">
      <div class="emoji">&#${i}</div>
      <div class="code">${i}</div> 
    </div>
    `)
}

$emojis.innerHTML +=
  emojis.join('')