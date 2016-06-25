System.register(['angular2/core', 'angular2/router', './nav/nav.component', './payments/payment-list/payment-list.component', './payments/payment-form/payment-form.component', './providers/provider-list/provider-list.component', './providers/provider-form/provider-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_component_1, payment_list_component_1, payment_form_component_1, provider_list_component_1, provider_form_component_1, router_2;
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
                        { path: '/provider-form/:id', name: 'ProviderFormFromProvider', component: provider_form_component_1.ProviderFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBcEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1SEFLVDt3QkFDSixVQUFVLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDBCQUFpQixDQUFDO3FCQUM3QyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3pGLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQzt3QkFDNUUsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFDLHdCQUF3QixFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQzt3QkFDM0YsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO3dCQUN4RSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQzt3QkFDL0UsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLDBCQUEwQixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQztxQkFDL0YsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge05hdkNvbXBvbmVudH0gZnJvbSAnLi9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQge1BheW1lbnRMaXN0Q29tcG9uZW50fSBmcm9tICcuL3BheW1lbnRzL3BheW1lbnQtbGlzdC9wYXltZW50LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UGF5bWVudGZvcm1Db21wb25lbnR9IGZyb20gJy4vcGF5bWVudHMvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm92aWRlckxpc3RDb21wb25lbnR9IGZyb20gJy4vcHJvdmlkZXJzL3Byb3ZpZGVyLWxpc3QvcHJvdmlkZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm92aWRlckZvcm1Db21wb25lbnR9IGZyb20gJy4vcHJvdmlkZXJzL3Byb3ZpZGVyLWZvcm0vcHJvdmlkZXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250YWN0TGlzdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0cy9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PG5hdmJhcj48L25hdmJhcj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdFx0PC9kaXY+XG4gICAgYCxcblx0ZGlyZWN0aXZlczogW05hdkNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHtwYXRoOiAnL3BheW1lbnRzJywgbmFtZTonUGF5bWVudHMnLCBjb21wb25lbnQ6IFBheW1lbnRMaXN0Q29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXHR7cGF0aDogJy9wYXltZW50LWZvcm0nLCBuYW1lOidQYXltZW50Rm9ybScsIGNvbXBvbmVudDogUGF5bWVudGZvcm1Db21wb25lbnR9LFxuXHR7cGF0aDogJy9wYXltZW50LWZvcm0vOmlkJywgbmFtZTonUGF5bWVudEZvcm1Gcm9tUGF5bWVudCcsIGNvbXBvbmVudDogUGF5bWVudGZvcm1Db21wb25lbnR9LFxuXHR7cGF0aDogJy9wcm92aWRlcnMnLCBuYW1lOidQcm92aWRlcnMnLCBjb21wb25lbnQ6IFByb3ZpZGVyTGlzdENvbXBvbmVudH0sXG5cdHtwYXRoOiAnL3Byb3ZpZGVyLWZvcm0nLCBuYW1lOidQcm92aWRlckZvcm0nLCBjb21wb25lbnQ6IFByb3ZpZGVyRm9ybUNvbXBvbmVudH0sXG5cdHtwYXRoOiAnL3Byb3ZpZGVyLWZvcm0vOmlkJywgbmFtZTonUHJvdmlkZXJGb3JtRnJvbVByb3ZpZGVyJywgY29tcG9uZW50OiBQcm92aWRlckZvcm1Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
