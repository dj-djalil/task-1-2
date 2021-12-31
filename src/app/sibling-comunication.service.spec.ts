import { TestBed } from '@angular/core/testing';

import { SiblingComunicationService } from './sibling-comunication.service';

describe('SiblingComunicationService', () => {
  let service: SiblingComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
