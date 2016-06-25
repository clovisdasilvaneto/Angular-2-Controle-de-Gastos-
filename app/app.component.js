System.register(['angular2/core', 'angular2/router', './nav/nav.component', './payments/payment-list/payment-list.component', './payments/payment-form/payment-form.component', './providers/provider-list/provider-list.component', './providers/provider-form/provider-form.component', './contacts/contact-list.component', './contacts/new-contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, nav_component_1, payment_list_component_1, payment_form_component_1, provider_list_component_1, provider_form_component_1, contact_list_component_1, new_contact_component_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (payment_list_component_1_1) {
                payment_list_component_1 = payment_list_component_1_1;
            },
            function (payment_form_component_1_1) {
                payment_form_component_1 = payment_form_component_1_1;
            },
            function (provider_list_component_1_1) {
                provider_list_component_1 = provider_list_component_1_1;
            },
            function (provider_form_component_1_1) {
                provider_form_component_1 = provider_form_component_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<navbar></navbar>\n\t\t<div class=\"container-fluid\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    ",
                        directives: [nav_component_1.NavComponent, router_2.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/payments', name: 'Payments', component: payment_list_component_1.PaymentListComponent, useAsDefault: true },
                        { path: '/payment-form', name: 'PaymentForm', component: payment_form_component_1.PaymentformComponent },
                        { path: '/payment-form/:id', name: 'PaymentFormFromPayment', component: payment_form_component_1.PaymentformComponent },
                        { path: '/providers', name: 'Providers', component: provider_list_component_1.ProviderListComponent },
                        { path: '/provider-form', name: 'ProviderForm', component: provider_form_component_1.ProviderFormComponent },
                        { path: '/provider-form/:id', name: 'ProviderFormFromProvider', component: provider_form_component_1.ProviderFormComponent },
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent },
                        { path: '/newContact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
                        { path: '/newContact/:name', name: 'NewContactFromContact', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1SEFLVDt3QkFDSixVQUFVLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDBCQUFpQixDQUFDO3FCQUM3QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3pGLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQzt3QkFDNUUsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFDLHdCQUF3QixFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQzt3QkFDM0YsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO3dCQUN4RSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQzt3QkFDL0UsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLDBCQUEwQixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQzt3QkFDL0YsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO3dCQUNyRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7d0JBQ3hFLEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7cUJBQ3pGLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtOYXZDb21wb25lbnR9IGZyb20gJy4vbmF2L25hdi5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXltZW50TGlzdENvbXBvbmVudH0gZnJvbSAnLi9wYXltZW50cy9wYXltZW50LWxpc3QvcGF5bWVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1BheW1lbnRmb3JtQ29tcG9uZW50fSBmcm9tICcuL3BheW1lbnRzL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7UHJvdmlkZXJMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Byb3ZpZGVycy9wcm92aWRlci1saXN0L3Byb3ZpZGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UHJvdmlkZXJGb3JtQ29tcG9uZW50fSBmcm9tICcuL3Byb3ZpZGVycy9wcm92aWRlci1mb3JtL3Byb3ZpZGVyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdHMvY29udGFjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0NvbnRhY3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxuYXZiYXI+PC9uYXZiYXI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHRcdDwvZGl2PlxuICAgIGAsXG5cdGRpcmVjdGl2ZXM6IFtOYXZDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5AUm91dGVDb25maWcoW1xuXHR7cGF0aDogJy9wYXltZW50cycsIG5hbWU6J1BheW1lbnRzJywgY29tcG9uZW50OiBQYXltZW50TGlzdENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcblx0e3BhdGg6ICcvcGF5bWVudC1mb3JtJywgbmFtZTonUGF5bWVudEZvcm0nLCBjb21wb25lbnQ6IFBheW1lbnRmb3JtQ29tcG9uZW50fSxcblx0e3BhdGg6ICcvcGF5bWVudC1mb3JtLzppZCcsIG5hbWU6J1BheW1lbnRGb3JtRnJvbVBheW1lbnQnLCBjb21wb25lbnQ6IFBheW1lbnRmb3JtQ29tcG9uZW50fSxcblx0e3BhdGg6ICcvcHJvdmlkZXJzJywgbmFtZTonUHJvdmlkZXJzJywgY29tcG9uZW50OiBQcm92aWRlckxpc3RDb21wb25lbnR9LFxuXHR7cGF0aDogJy9wcm92aWRlci1mb3JtJywgbmFtZTonUHJvdmlkZXJGb3JtJywgY29tcG9uZW50OiBQcm92aWRlckZvcm1Db21wb25lbnR9LFxuXHR7cGF0aDogJy9wcm92aWRlci1mb3JtLzppZCcsIG5hbWU6J1Byb3ZpZGVyRm9ybUZyb21Qcm92aWRlcicsIGNvbXBvbmVudDogUHJvdmlkZXJGb3JtQ29tcG9uZW50fSxcblx0e3BhdGg6ICcvY29udGFjdHMnLCBuYW1lOidDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnR9LFxuXHR7cGF0aDogJy9uZXdDb250YWN0JywgbmFtZTonTmV3Q29udGFjdCcsIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudH0sXG5cdHtwYXRoOiAnL25ld0NvbnRhY3QvOm5hbWUnLCBuYW1lOidOZXdDb250YWN0RnJvbUNvbnRhY3QnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
