import { MyfirstangularappPage } from './app.po';

describe('myfirstangularapp App', function() {
  let page: MyfirstangularappPage;

  beforeEach(() => {
    page = new MyfirstangularappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
