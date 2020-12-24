import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RouterLinkDirectiveStub, click } from '../testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDebugElements: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })

    // Get rid of app's Router configuration otherwise many failures.
    // Doing so removes Router declarations; add the Router stubs
    .overrideModule(AppModule, {
      remove: {
        imports: [RouterModule]
      },
      add: {
        declarations: [ RouterLinkDirectiveStub ]
      }
    })

    .compileComponents()

    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

  }));

  beforeEach(() => {
    fixture.detectChanges(); // trigger initial changes

    // get all DebugElements with routerLink
    linkDebugElements = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDebugElements.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should have routerlinks in template', () => {
    expect(routerLinks.length).toBe(2, 'should have 2 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/cats');
    expect(routerLinks[1].linkParams).toBe('/dogs');
  });

  it('should navigate to /cats when clicked on Cats link', () => {
    const catLinkDe = linkDebugElements[0]; // cats link debug element
    const catLink = routerLinks[0];

    expect(catLink.navigatedTo).toBeNull('should not have navigated yet');

    // click the link and expect the app to navigate
    click(catLinkDe); // click the link
    fixture.detectChanges(); // update app to detect changes

    expect(catLink.navigatedTo).toBe('/cats');
  });

  it('should navigate to /dogs when clicked on dogs link', (() => {
    const doglinkDe = linkDebugElements[1];
    const dogLink = routerLinks[1];

    // click the link and expect the app to navigate
    click(doglinkDe); // click the link
    fixture.detectChanges(); // update app to detect changes

    expect(dogLink.navigatedTo).toEqual('/dogs', 'should have navigated to /dogs');
  }));

});
