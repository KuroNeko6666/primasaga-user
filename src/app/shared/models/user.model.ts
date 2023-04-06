export class UserModel {
  public id?: string
  public name?: string
  public username?: string
  public email?: string
  public role?: string

  constructor(data: UserModel){
    Object.assign(this, data)
  }
}
