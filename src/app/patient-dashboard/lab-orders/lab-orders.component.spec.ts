// /* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { LabOrdersComponent } from './lab-orders.component';
// import { AppFeatureAnalytics } from '../../shared/app-analytics/app-feature-analytics.service';
// import { FakeAppFeatureAnalytics } from '../../shared/app-analytics/app-feature-analytcis.mock';
// import { PatientService } from '../patient.service';
// describe('Component: Lab Orders', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         PatientService,
//         {
//           provide: AppFeatureAnalytics, useFactory: () => {
//             return new FakeAppFeatureAnalytics();
//           }, deps: []
//         }
//       ]
//     });
//   });

//   afterEach(() => {
//     TestBed.resetTestingModule();
//   });

//   it('should create an instance', () => {
//     let fakeAppFeatureAnalytics: AppFeatureAnalytics = TestBed.get(AppFeatureAnalytics);
//     let component = new LabOrdersComponent(fakeAppFeatureAnalytics);
//     expect(component).toBeTruthy();
//   });
// });
