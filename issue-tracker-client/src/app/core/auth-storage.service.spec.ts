import { TestBed } from '@angular/core/testing';

import { AuthStorageService } from './auth-storage.service';

xdescribe('AuthStorageService', () => {
  let service: AuthStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
