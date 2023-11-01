export const paths = {
  login: '/login',
  register: '/register',
  home: '/',
  hospitals: '/hospitals',
  hospitalsCardById: function(id: number) { 
    return `${this.hospitals}/${id}`
  },
  hospitalCard: function() {
    return `${this.hospitals}/:hospitalId`
  } 
}
