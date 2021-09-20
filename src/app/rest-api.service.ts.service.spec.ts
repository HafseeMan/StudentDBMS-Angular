import { TestBed } from '@angular/core/testing';

import { RestApi.Service.TsService } from './rest-api.service.ts.service';

describe('RestApi.Service.TsService', () => {
  let service: RestApi.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApi.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
