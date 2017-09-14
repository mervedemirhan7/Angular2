import { FormIslemleriPage } from './app.po';

describe('form-islemleri App', function() {
  let page: FormIslemleriPage;

  beforeEach(() => {
    page = new FormIslemleriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
