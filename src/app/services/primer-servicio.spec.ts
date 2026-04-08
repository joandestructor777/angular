import { TestBed } from '@angular/core/testing';

import { PrimerServicio } from './primer-servicio';

describe('PrimerServicio', () => {
  let service: PrimerServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
