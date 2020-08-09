import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { first } from 'rxjs/operators';
import { Global } from '../_config/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  submitted = false;
  confirmation = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private config: Global
  ) {}

  ngOnInit(): void {
    this.config.isAuthPage = true;
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register(this.registerForm.value)
                    .subscribe(
                      data => {
                        // tslint:disable-next-line:triple-equals
                        if (data.status == 'OK') {
                          this.confirmation = true;
                          this.submitted = false;
                          setTimeout( () => {
                            this.router.navigate(['/login']);
                          }, 5000 );
                          this.config.isAuthPage = false;
                        } else {
                          this.f.email.setErrors({exist: true});
                        }
                      }
                    );
  }

  get f() {
    return this.registerForm.controls;
  }

  close() {
    this.config.isAuthPage = false;
    this.router.navigate(['/']);
  }
}
