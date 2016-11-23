import { BaggersPage } from './app.po';

describe('baggers App', function() {
  let page: BaggersPage;

  beforeEach(() => {
    page = new BaggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
