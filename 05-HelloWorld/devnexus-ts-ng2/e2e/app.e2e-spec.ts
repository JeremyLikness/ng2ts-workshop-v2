import { DevnexusTsNg2Page } from './app.po';

describe('devnexus-ts-ng2 App', function() {
  let page: DevnexusTsNg2Page;

  beforeEach(() => {
    page = new DevnexusTsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
