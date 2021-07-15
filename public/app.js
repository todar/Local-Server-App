/** @type {import('socket.io').Socket} socket*/
const socket = io();

const button = document.querySelector('#button');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

// Demo using socket.io
// This example passes in the input value, which should be a
// property of Nodejs process.evn object, and a callback function
// which returns the result of that property or the full env if it
// doesn't exist. This demonstrates how to interact with the server
// and really the local machine! 😎
button.onclick = () => {
  output.textContent = `Loading 🔃`

  socket.emit('test:env', input.value, response => {
    output.textContent = `${response} 😎`
    input.value = ''
    input.focus()
  })
};

// To make demo feel totes profesh 😎
input.onkeyup = e => {
    // Submit request on enter press.
    if (e.keyCode === 13) {
      e.preventDefault();
      button.click();
    }

    // Refresh search message if needed
    const message = 'Search for a <code>process.env</code> property! 🎉'
    if (output.innerHTML !== message) {
      output.innerHTML = message
    }
}