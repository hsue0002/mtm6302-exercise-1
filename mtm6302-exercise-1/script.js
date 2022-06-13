const $emojis =
  document.getElementById('emojis')
const emojis = []

for (let i = 129410; i < 129511; i++) {
  emojis.push(`
    <div class="emoji">&#${i}</div>
    <code class="code">${i}</code> 
    `)
}

$emojis.innerHTML +=
  emojis.join('')