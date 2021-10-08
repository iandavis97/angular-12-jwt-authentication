import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: any = {
    currentPassword: null,
    newPassword: null,
    confirmPassword: null
  };
  isLoggedIn=false;
  isSuccessful = false;
  isChangePwdFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit(): void {
    const { currentPassword, newPassword, confirmPassword } = this.form;

    this.authService.changePassword(currentPassword, newPassword, confirmPassword).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isChangePwdFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isChangePwdFailed = true;
      }
    );
  }
}
