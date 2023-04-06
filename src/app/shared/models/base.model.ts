export class BaseModel<T> {
  public message?: string
  public data?: T

  constructor(data: BaseModel<T>){
    Object.assign(this, data)
  }
}
