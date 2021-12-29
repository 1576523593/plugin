const header = {
  json: {
    'Content-Type': 'application/json'
  },
  form: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  client: {
    'Content-Type': 'application/json',
    'clientKey': 'auth',
    'clientPassword': 'ratel200'
  },
  formData: {
    'Content-Type': 'multipart/form-data'
  }
}
export default header
