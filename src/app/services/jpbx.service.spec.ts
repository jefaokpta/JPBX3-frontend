import { TestBed } from '@angular/core/testing';

import { JpbxService } from './jpbx.service';

describe('JpbxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JpbxService = TestBed.get(JpbxService);
    expect(service).toBeTruthy();
  });
});
