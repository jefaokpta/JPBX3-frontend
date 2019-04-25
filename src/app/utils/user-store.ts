import { User } from '../model/user';

export class UserStore {
  private user: User;

  public getUser(): User{
    try {
      return JSON.parse(localStorage.getItem('JPBXUSER'));
    } catch (e) {
      console.error('Erro ao solicitar USER localStorage', e);
    }
  }
  public setUser(u: User) {
    try {
      localStorage.setItem('JPBXUSER', JSON.stringify(u));
    } catch (e) {
      console.error('Erro ao salvar USER localStorage', e);
    }
  }
}
