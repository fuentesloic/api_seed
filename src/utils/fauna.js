// import { User } from "../models/auth"

// export function createAuthUser(body) {
//   const _user = new User(body)

//   return {
//     credentials: {
//       password: _user.password
//     },
//     data: {
//       name: _user.name,
//       email: _user.email
//     }
//   }
// }

export function createAuthUser() {
  return {
    credentials: {
      password: 'my_password'
    },
    data: {
      name: 'john doe',
      email: 'john.doe@seed.ca'
    }
  }
}
