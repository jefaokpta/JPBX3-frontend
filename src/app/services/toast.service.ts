import { Injectable } from '@angular/core';
import { NbGlobalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  index = 1;
  destroyByClick = true;
  duration = 30000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbToastStatus = NbToastStatus.DANGER;

  constructor(private toast: NbToastrService) { }

  public makeToast(title: string, content: string, look: string) {
    switch(look){
      case 'danger': {
        this.status = NbToastStatus.DANGER;
        break;
      }
      case 'success': {
        this.status = NbToastStatus.SUCCESS;
        break;
      }
    }
    this.showToast(this.status, title, content);
  }

  private showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` ${title}` : '';

    this.index += 1;
    this.toast.show(
      body,
      `${titleContent}`,
      config);
  }
}
