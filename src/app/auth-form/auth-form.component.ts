import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Input('formType') formType :String

  formTitle = 'Giris Yapin'
  buttonText='Giris'
  isLogin=true

  emailCtrl = new FormControl('',[Validators.required,AuthFormComponent.isEmailValid])
  passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)])

  //dogrulama metodumuz
static isEmailValid(control: FormControl){
  // deger gecerli bir email mi?
  const email= control.value;

  return email.indexOf('@') > 0 ? null : { invalidEmail: `gecersiz email!` };
}


  /** Kosullu olarka olusturulacaklar*/
  nameCtrl:FormControl
  passwordCtrl2:FormControl
  
  authForm : FormGroup

  constructor(private fb:FormBuilder) {
    this.authForm = fb.group({
      email:this.emailCtrl,
      password:this.passwordCtrl
    })
  }

  ngOnInit() {
    if(this.formType =='Register'){
      this.buttonText = 'Kayit';
      this.formTitle = 'Kayit Ol';
      this.isLogin = false;

        /** Register oldugu icin isim ve sifre 2 yi de olustur*/
        this.passwordCtrl2 = new FormControl('',[Validators.required, Validators.minLength(6)])
        this.nameCtrl = new FormControl('', Validators.required)
        /** Gruba ekle*/
        this.authForm.addControl("password2",this.passwordCtrl2)
        this.authForm.addControl("name",this.nameCtrl)
        this.authForm.valueChanges
        .subscribe(formdakiDegisiklik =>{
          console.log("Formda Degisiklik oldu  : ", formdakiDegisiklik)
        })

    
    }
  }

  private handleForm(){
    let form = this.authForm.value;
    
    if(this.isLogin){
      console.log("Giris Formu : ", form)
    }else{
      console.log("Kayit Formu : ", form)
    }
  
  }

}
