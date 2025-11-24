import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
    name: 'Afsar',
  }
})


router.post('api/login', async () => {
  // await auth.use('web').login
  return {
    message: 'Hello afsar',
    error: 'should i show errors',
  }
})


router.get('/api/dashboard', async () => {
  return {
    home: 'I am at dashboard',
    error: 'No error'
  }
})


router.get('/api/employee', async () => {
  return [
    {
      id: 1001,
      name: 'Afsar Tanvir',
      date_of_birth: '24-10-2025',
    },
    {
      id: 1002,
      name: 'Md. Faysal Numin',
      date_of_birth: '24-10-2023',
    },
    {
      id: 1003,
      name: 'Mohammad Arman Ahmed Adil',
      date_of_birth: '24-10-2020',
    },
    {
      id: 1004,
      name: 'Anamul Hasan',
      date_of_birth: '24-05-2023',
    },
    {
      id: 1005,
      name: 'Nahim',
      date_of_birth: '14-10-2025',
    },
    {
      id: 1006,
      name: 'kalid Azad',
      date_of_birth: '24-10-2026',
    },
  ]
})
