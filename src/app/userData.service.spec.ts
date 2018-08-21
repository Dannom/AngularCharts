import { TestBed, inject } from '@angular/core/testing';

import { userDataService } from './userData.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [userDataService]
    });
  });

  it('should be created', inject([userDataService], (service: userDataService) => {
    expect(service).toBeTruthy();
  }));
});
