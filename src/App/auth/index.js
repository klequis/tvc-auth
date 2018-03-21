export const isAuthenticated = () => {
  const authenticated = localStorage.getItem('jwt') !== null
  // console.log('isAuthenticated', authenticated)
  return authenticated
}