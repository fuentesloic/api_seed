export class User {
  constructor(email, firstName, lastName, password) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.password = password
  }

  get name() {
    return `${this.firstNAme} ${this.lastName}`
  }

  get email() {
    return this.email
  }

  get password() {
    return this.password
  }
}
