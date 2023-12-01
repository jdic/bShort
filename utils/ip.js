/**
 * Get your local ip address (IPv4).
 * @returns { String }
 */
const ip = () =>
{
  const interfaces = require('os').networkInterfaces()

  for (const name of Object.keys(interfaces))
  {
    for (const interface of interfaces[name])
    {
      if (interface.family === 'IPv4' && !interface.internal)
      {
        return interface.address
      }
    }
  }
}

module.exports = ip
