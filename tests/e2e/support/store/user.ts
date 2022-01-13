import { User } from '../types'

export const userStore = new Map<string, User>([
  [
    'admin',
    {
      id: 'admin',
      displayName: process.env.ADMIN_USERNAME || 'admin',
      password: 'admin',
      email: 'admin@example.org'
    }
  ],
  [
    'Alice',
    {
      id: 'Alice',
      displayName: 'Alice Hansen',
      password: '1234',
      email: 'alice@example.org'
    }
  ],
  [
    'Brian',
    {
      id: 'Brian',
      displayName: 'Brian Murphy',
      password: 'AaBb2Cc3Dd4',
      email: 'brian@example.org'
    }
  ],
  [
    'Carol',
    {
      id: 'Carol',
      displayName: 'Carol King',
      password: 'aVeryLongPassword42TheMeaningOfLife',
      email: 'carol@example.org'
    }
  ],
  [
    'David',
    {
      id: 'David',
      displayName: 'David Lopez',
      password: 'ThisIsThe4thAlternatePwd',
      email: 'david@example.org'
    }
  ]
])
