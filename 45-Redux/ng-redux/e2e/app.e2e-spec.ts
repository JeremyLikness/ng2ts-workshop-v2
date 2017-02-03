import { NgReduxPage } from './app.po';

describe('ng-redux App', function() {
  let page: NgReduxPage;

  beforeEach(() => {
    page = new NgReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
