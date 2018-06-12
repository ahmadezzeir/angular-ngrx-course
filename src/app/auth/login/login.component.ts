import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

<<<<<<< HEAD
import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AppState } from "../../reducers/index";
import { LoginAction } from "../auth.actions";
import { User } from '../../model/user.model';
=======
import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from '../../reducers';
import {Login} from '../auth.actions';
>>>>>>> master

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
<<<<<<< HEAD
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]]
    });
=======
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AppState>) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

>>>>>>> master
  }

  ngOnInit() {}

  login() {

<<<<<<< HEAD
=======
    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(user => {

          this.store.dispatch(new Login({user}));

          this.router.navigateByUrl('/courses');

        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );


  }

>>>>>>> master

    const values = this.form.value;
    this.auth
      .login(values.email, values.password)
      .pipe(
        tap(user => {
          // console.log(user);
          this.store.dispatch(new LoginAction({user}));
          this.router.navigateByUrl("/courses");
        })
      )
      .subscribe(noop, () => alert("Login Failed"));
  }
}
