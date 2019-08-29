import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user/user.service";
import { first } from "rxjs/operators";

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register(this.registerForm.value)
                    .pipe(first())
                    .subscribe(
                      data => {
                        if (data.status == 'OK') {
                          this.confirmation = true;
                          setTimeout( () => {
                            this.router.navigate(['/login']);
                          }, 5000 );
                        } else {
                          this.f.email.setErrors({'exist': true})
                        }
                      }
                    );
  }

  get f() {
    return this.registerForm.controls;
  }

}
