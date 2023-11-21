import {IUser} from "./IUser";

export interface IUserTokenResponse {
  token: string
  description: string
  success: boolean
  user: IUser
  id: string
}
