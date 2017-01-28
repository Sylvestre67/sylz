import { async, TestBed } from '@angular/core/testing';
import { RedishComponent } from './redish.component';
describe('RedishComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RedishComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RedishComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/gugs/sites/sylz/d3_ng2/src/app/redish/redish.component.spec.js.map