import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticationService } from "../authentication.service";
import { EmployeeComponent } from "./employee.component";

describe("EmployeeComponent", () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return the value 'checkAuthentication has been called'", () => {
    spyOn(authService, "checkAuthentication");
    let salSlip = component.getSalarySlip();

    // expect(salSlip).toEqual("Salary Slip");
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });
});
