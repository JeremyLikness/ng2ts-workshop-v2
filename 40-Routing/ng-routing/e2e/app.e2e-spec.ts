import { NgRoutingPage } from './app.po';

describe('ng-routing App', function() {
  let page: NgRoutingPage;

  beforeEach(() => {
    page = new NgRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
