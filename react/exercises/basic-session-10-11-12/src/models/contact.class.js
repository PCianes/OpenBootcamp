import { STATE } from './contactState.enum'

export class Contact {
  name = ''
  surname = ''
  email = ''
  online = false
  state = STATE

  constructor(name, surname, email, online = false) {
    this.name = name
    this.surname = surname
    this.email = email
    this.online = online
  }
}