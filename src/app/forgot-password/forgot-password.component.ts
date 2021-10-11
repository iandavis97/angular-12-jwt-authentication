import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: any = {
    email: null,
  };
  isLinkSuccess=false;
  isLinkFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { email } = this.form;

    //temporary until api functions implemented, copied from login component
    this.authService.forgotPassword(email).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);

        this.isLinkFailed = false;
        this.isLinkSuccess = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLinkFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
