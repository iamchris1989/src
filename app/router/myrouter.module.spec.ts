import { MyrouterModule } from './myrouter.module';

describe('MyrouterModule', () => {
  let myrouterModule: MyrouterModule;

  beforeEach(() => {
    myrouterModule = new MyrouterModule();
  });

  it('should create an instance', () => {
    expect(myrouterModule).toBeTruthy();
  });
});
