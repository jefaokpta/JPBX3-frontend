import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Criado com ❤️ e 💧 por <b><a href="https://jpbx.com.br" target="_blank">Jefaokpta</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/jefaokpta" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/jefferson-alves-reis-00007361" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
