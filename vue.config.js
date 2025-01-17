const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Invitacion_Baby_Shower/'  // Reemplaza 'mi-repositorio' con el nombre de tu repositorio
    : '/'
}

