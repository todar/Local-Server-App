/**
 * Fuction to Handle test calls.
 * @param {import('socket.io').Server} io
 * @param {import('socket.io').Socket} socket
 */
module.exports = (io, socket) => {
  // Get an environment variable based on the property requested.
  // Any errors will return the full env!
  const getEnvironmentProperty = (property, callback) => {
    callback(process.env[property] || JSON.stringify(process.env, null, 2))
  }

  socket.on('test:env', getEnvironmentProperty);
};