
export class TokenStore {

  public getToken(){
    try {
      return JSON.parse(localStorage.getItem('JPBXTOKEN')) || 'NADA';
    } catch (e) {
      console.error('Erro ao solicitar localStorage', e);
      return 'nadinha';
    }
  }
  public setToken(t: string){
    try {
      localStorage.setItem('JPBXTOKEN', JSON.stringify(t));
    } catch (e) {
      console.error('Erro ao salvar localStorage', e);
    }
  }
}
