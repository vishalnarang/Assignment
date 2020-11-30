import { EventEmitter, Injectable } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";



@Injectable()
export class CommonService {

    _showLoader: EventEmitter<boolean> = new EventEmitter<boolean>(true);
    
    constructor() { }

    set showLoader(val: boolean) {
        this._showLoader.emit(val);
    }

    

    public validateAllFormFields(form: FormGroup) {
        const keys = Object.keys(form.controls);
        keys.forEach((field: any) => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            } else if (control instanceof FormArray) {
                (<FormArray>control).controls.forEach((element: FormGroup) => {
                    this.validateAllFormFields(element);
                });
            }
        });
    }

    public response(res: any) {
      console.log(">>>>>>>>>>>res", res)
        if (!(res.status === 200)) {
          if (res.status === 101) {
            this.showLoader = false;
            localStorage.clear();
            setTimeout(() => {
              location.pathname = "/";
            }, 2000);
          }
          throw new Error(res.message);
        } else {
          return res;
        }
      }
}



