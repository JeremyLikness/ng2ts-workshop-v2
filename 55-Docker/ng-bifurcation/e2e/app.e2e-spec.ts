import { NgBifurcationPage } from './app.po';

describe('ng-bifurcation App', function() {
  let page: NgBifurcationPage;

  beforeEach(() => {
    page = new NgBifurcationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
