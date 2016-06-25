System.register(['angular2/core', 'angular2/router', '../../providers/provider.service', '../payment.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, provider_service_1, payment_service_1;
    var PaymentformComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (provider_service_1_1) {
                provider_service_1 = provider_service_1_1;
            },
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            }],
        execute: function() {
            PaymentformComponent = (function () {
                function PaymentformComponent(_router, _routeParams, _paymentService, _providerService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._paymentService = _paymentService;
                    this._providerService = _providerService;
                    this.providers = [];
                }
                PaymentformComponent.prototype.getPayments = function () {
                    var _this = this;
                    this.isEdit = true;
                    this._paymentService.getById({
                        _id: this._routeParams.get('id')
                    }).then(function (payment) {
                        _this.payment = payment;
                    });
                };
                PaymentformComponent.prototype.getProviders = function () {
                    var _this = this;
                    this._providerService.get().then(function (providers) {
                        _this.providers = providers;
                    });
                };
                PaymentformComponent.prototype.removePayments = function (payment) {
                    var _this = this;
                    if (confirm("You sure you want to delete this record ?")) {
                        this._paymentService.remove(payment).then(function (resp) {
                            _this._router.navigate(['Payments']);
                        });
                    }
                };
                PaymentformComponent.prototype.checkPayment = function (paymentForm, payment) {
                    if (!paymentForm.form.valid) {
                        this.errorMsg = "Please, fill all fields in red";
                        return;
                    }
                    if (this.isEdit) {
                        return this.savePayment(payment);
                    }
                    else {
                        return this.addPayment(payment);
                    }
                };
                PaymentformComponent.prototype.savePayment = function (payment) {
                    var _this = this;
                    this._paymentService.save(payment).then(function () {
                        _this._router.navigate(['Payments']);
                    });
                };
                PaymentformComponent.prototype.addPayment = function (payment) {
                    var _this = this;
                    this._paymentService.save(payment).then(function (resp) {
                        _this._router.navigate(['Payments']);
                    });
                };
                PaymentformComponent.prototype.ngOnInit = function () {
                    this.payment = { provider: { name: '' }, value: '', payment_form: '' };
                    this.getProviders();
                    if (this._routeParams.get('id')) {
                        return this.getPayments();
                    }
                };
                PaymentformComponent = __decorate([
                    core_1.Component({
                        selector: 'payment-form',
                        templateUrl: './dev/payments/payment-form/payment-form.template.html',
                        styles: ["\n\t\t.alert {\n\t\t\tpadding: 10px;\n\t\t\tmargin-top: 46px;\n\t\t}\n\t"],
                        styleUrls: ["./src/css/btn.css"],
                        providers: [payment_service_1.PaymentService, provider_service_1.ProviderService],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, payment_service_1.PaymentService, provider_service_1.ProviderService])
                ], PaymentformComponent);
                return PaymentformComponent;
            }());
            exports_1("PaymentformComponent", PaymentformComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFNQyw4QkFBb0IsT0FBZSxFQUFVLFlBQXlCLEVBQzNELGVBQStCLEVBQVUsZ0JBQWlDO29CQURqRSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUMzRCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFIOUUsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFHaUUsQ0FBQztnQkFFeEYsMENBQVcsR0FBWDtvQkFBQSxpQkFPQztvQkFOQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFnQjt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBcUI7d0JBQ3RELEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELDZDQUFjLEdBQWQsVUFBZSxPQUFPO29CQUF0QixpQkFNQztvQkFMQSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7NEJBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsQ0FBQyxDQUFDLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUVELDJDQUFZLEdBQVosVUFBYSxXQUFXLEVBQUUsT0FBTztvQkFDaEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7d0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQWdDLENBQUM7d0JBQ2pELE1BQU0sQ0FBQztvQkFDUixDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxDQUFDO2dCQUNGLENBQUM7Z0JBRUQsMENBQVcsR0FBWCxVQUFZLE9BQU87b0JBQW5CLGlCQUlDO29CQUhBLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELHlDQUFVLEdBQVYsVUFBVyxPQUFPO29CQUFsQixpQkFJQztvQkFIQSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3dCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFBO29CQUVsRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQztnQkFFRixDQUFDO2dCQWhGRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsd0RBQXdEO3dCQUN4RSxNQUFNLEVBQUUsQ0FBQywwRUFLUixDQUFDO3dCQUNGLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGtDQUFlLENBQUM7d0JBQzVDLFVBQVUsRUFBQyxFQUFFO3FCQUNiLENBQUM7O3dDQUFBO2dCQXFFRiwyQkFBQztZQUFELENBbkVBLEFBbUVDLElBQUE7WUFuRUQsdURBbUVDLENBQUEiLCJmaWxlIjoicGF5bWVudHMvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BheW1lbnR9IGZyb20gJy4uL3BheW1lbnQnO1xuaW1wb3J0IHtQcm92aWRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9wcm92aWRlcic7XG5pbXBvcnQge1BheW1lbnRTZXJ2aWNlfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BheW1lbnQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rldi9wYXltZW50cy9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLnRlbXBsYXRlLmh0bWwnLFxuXHRzdHlsZXM6IFtgXG5cdFx0LmFsZXJ0IHtcblx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRtYXJnaW4tdG9wOiA0NnB4O1xuXHRcdH1cblx0YF0sXG5cdHN0eWxlVXJsczogW1wiLi9zcmMvY3NzL2J0bi5jc3NcIl0sXG5cdHByb3ZpZGVyczogW1BheW1lbnRTZXJ2aWNlLCBQcm92aWRlclNlcnZpY2VdLFxuXHRkaXJlY3RpdmVzOltdXG59KVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudGZvcm1Db21wb25lbnQge1xuXHRwdWJsaWMgcGF5bWVudDogUGF5bWVudDtcblx0cHVibGljIGlzRWRpdDtcblx0cHVibGljIGVycm9yTXNnO1xuXHRwdWJsaWMgcHJvdmlkZXJzID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRcdFx0cHJpdmF0ZSBfcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIF9wcm92aWRlclNlcnZpY2U6IFByb3ZpZGVyU2VydmljZSl7fVxuXG5cdGdldFBheW1lbnRzKCl7XG5cdFx0dGhpcy5pc0VkaXQgPSB0cnVlO1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLmdldEJ5SWQoe1xuXHRcdFx0X2lkOiB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJylcblx0XHR9KS50aGVuKChwYXltZW50OiBQYXltZW50KSA9PiB7XG5cdFx0XHR0aGlzLnBheW1lbnQgPSBwYXltZW50O1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0UHJvdmlkZXJzKCl7XG5cdFx0dGhpcy5fcHJvdmlkZXJTZXJ2aWNlLmdldCgpLnRoZW4oKHByb3ZpZGVyczogUHJvdmlkZXJbXSkgPT4ge1xuXHRcdFx0dGhpcy5wcm92aWRlcnMgPSBwcm92aWRlcnM7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVQYXltZW50cyhwYXltZW50KXtcblx0XHRpZihjb25maXJtKFwiWW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkID9cIikpe1xuXHRcdFx0dGhpcy5fcGF5bWVudFNlcnZpY2UucmVtb3ZlKHBheW1lbnQpLnRoZW4oKHJlc3ApPT57XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1BheW1lbnRzJ10pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tQYXltZW50KHBheW1lbnRGb3JtLCBwYXltZW50KXtcblx0XHRpZighcGF5bWVudEZvcm0uZm9ybS52YWxpZCl7XG5cdFx0XHR0aGlzLmVycm9yTXNnID0gXCJQbGVhc2UsIGZpbGwgYWxsIGZpZWxkcyBpbiByZWRcIjtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmlzRWRpdCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zYXZlUGF5bWVudChwYXltZW50KTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGRQYXltZW50KHBheW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHNhdmVQYXltZW50KHBheW1lbnQpe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLnNhdmUocGF5bWVudCkudGhlbigoKT0+e1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUGF5bWVudHMnXSk7XG5cdFx0fSk7XG5cdH1cblxuXHRhZGRQYXltZW50KHBheW1lbnQpe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLnNhdmUocGF5bWVudCkudGhlbigocmVzcCk9Pntcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1BheW1lbnRzJ10pO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMucGF5bWVudCA9IHtwcm92aWRlcjoge25hbWU6ICcnfSwgdmFsdWU6ICcnLCBwYXltZW50X2Zvcm06ICcnfVxuXG5cdFx0dGhpcy5nZXRQcm92aWRlcnMoKTtcblxuXHRcdGlmKHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYXltZW50cygpO1xuXHRcdH1cblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
