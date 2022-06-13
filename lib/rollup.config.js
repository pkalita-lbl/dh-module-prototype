export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'lib/dist/my-cool-library.es.js',
      format: 'es'
    },
    {
      file: 'lib/dist/my-cool-library.umd.js',
      format: 'umd',
      name: 'MyCoolLibrary'
    }
  ]
}
