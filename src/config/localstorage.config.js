export default {
  production: process.env.NODE_ENV === 'production',
  storageOptions: {
    namespace: 'sun-paper__',
    name: 'ls',
    storage: 'local'
  }
}
