// utilities/index.js
async function getNav() {
  return `
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/inventory">Inventory</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  `
}

module.exports = { getNav }