import { UserModel } from "./user.model"

export class LoginModel {
  public token?: string
  public user?: UserModel

  constructor(data: LoginModel){
    Object.assign(this, data)
  }
}
