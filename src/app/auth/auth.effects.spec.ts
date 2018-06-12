import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs/Observable';
>>>>>>> master

import { AuthEffects } from './auth.effects';

describe('AuthService', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
