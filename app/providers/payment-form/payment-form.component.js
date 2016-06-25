System.register(['angular2/core', 'angular2/router', '../payment.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, payment_service_1;
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
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            }],
        execute: function() {
            PaymentformComponent = (function () {
                function PaymentformComponent(_router, _routeParams, _paymentService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._paymentService = _paymentService;
                    this.providers = [
                        { _id: "576dd03e133954ce36e3753f", name: "Mc Donald's" },
                    ];
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
                PaymentformComponent.prototype.removePayments = function (payment) {
                    var _this = this;
                    if (confirm("You sure you want to delete this record ?")) {
                        this._paymentService.remove(payment).then(function (resp) {
                            console.log(resp);
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
                    if (this._routeParams.get('id')) {
                        return this.getPayments();
                    }
                };
                PaymentformComponent = __decorate([
                    core_1.Component({
                        selector: 'payment-form',
                        templateUrl: './dev/payments/payment-form/payment-form.template.html',
                        styleUrls: ["./src/css/btn.css"],
                        providers: [payment_service_1.PaymentService],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, payment_service_1.PaymentService])
                ], PaymentformComponent);
                return PaymentformComponent;
            }());
            exports_1("PaymentformComponent", PaymentformComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFRQyw4QkFBb0IsT0FBZSxFQUFVLFlBQXlCLEVBQzNELGVBQStCO29CQUR0QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUMzRCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBTG5DLGNBQVMsR0FBRzt3QkFDbEIsRUFBRSxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtxQkFDeEQsQ0FBQztnQkFHMEMsQ0FBQztnQkFFN0MsMENBQVcsR0FBWDtvQkFBQSxpQkFPQztvQkFOQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFnQjt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsNkNBQWMsR0FBZCxVQUFlLE9BQU87b0JBQXRCLGlCQU9DO29CQU5BLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTs0QkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDLENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsMkNBQVksR0FBWixVQUFhLFdBQVcsRUFBRSxPQUFPO29CQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQzt3QkFDakQsTUFBTSxDQUFDO29CQUNSLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLENBQUM7b0JBQUEsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBTztvQkFBbkIsaUJBSUM7b0JBSEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQseUNBQVUsR0FBVixVQUFXLE9BQU87b0JBQWxCLGlCQUlDO29CQUhBLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7d0JBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFDLENBQUE7b0JBRWxFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQztnQkFFRixDQUFDO2dCQXJFRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsd0RBQXdEO3dCQUN4RSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsVUFBVSxFQUFDLEVBQUU7cUJBQ2IsQ0FBQzs7d0NBQUE7Z0JBZ0VGLDJCQUFDO1lBQUQsQ0E5REEsQUE4REMsSUFBQTtZQTlERCx1REE4REMsQ0FBQSIsImZpbGUiOiJwcm92aWRlcnMvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BheW1lbnR9IGZyb20gJy4uL3BheW1lbnQnO1xuaW1wb3J0IHtQYXltZW50U2VydmljZX0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXltZW50LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXYvcGF5bWVudHMvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS50ZW1wbGF0ZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbXCIuL3NyYy9jc3MvYnRuLmNzc1wiXSxcblx0cHJvdmlkZXJzOiBbUGF5bWVudFNlcnZpY2VdLFxuXHRkaXJlY3RpdmVzOltdXG59KVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudGZvcm1Db21wb25lbnQge1xuXHRwdWJsaWMgcGF5bWVudDogUGF5bWVudDtcblx0cHVibGljIGlzRWRpdDtcblx0cHVibGljIGVycm9yTXNnO1xuXHRwdWJsaWMgcHJvdmlkZXJzID0gW1xuXHRcdHsgX2lkOiBcIjU3NmRkMDNlMTMzOTU0Y2UzNmUzNzUzZlwiLCBuYW1lOiBcIk1jIERvbmFsZCdzXCIgfSxcblx0XTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdFx0XHRwcml2YXRlIF9wYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2Upe31cblxuXHRnZXRQYXltZW50cygpe1xuXHRcdHRoaXMuaXNFZGl0ID0gdHJ1ZTtcblx0XHR0aGlzLl9wYXltZW50U2VydmljZS5nZXRCeUlkKHtcblx0XHRcdF9pZDogdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpXG5cdFx0fSkudGhlbigocGF5bWVudDogUGF5bWVudCkgPT4ge1xuXHRcdFx0dGhpcy5wYXltZW50ID0gcGF5bWVudDtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZVBheW1lbnRzKHBheW1lbnQpe1xuXHRcdGlmKGNvbmZpcm0oXCJZb3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQgP1wiKSl7XG5cdFx0XHR0aGlzLl9wYXltZW50U2VydmljZS5yZW1vdmUocGF5bWVudCkudGhlbigocmVzcCk9Pntcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcCk7XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1BheW1lbnRzJ10pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tQYXltZW50KHBheW1lbnRGb3JtLCBwYXltZW50KXtcblx0XHRpZighcGF5bWVudEZvcm0uZm9ybS52YWxpZCl7XG5cdFx0XHR0aGlzLmVycm9yTXNnID0gXCJQbGVhc2UsIGZpbGwgYWxsIGZpZWxkcyBpbiByZWRcIjtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmlzRWRpdCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zYXZlUGF5bWVudChwYXltZW50KTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGRQYXltZW50KHBheW1lbnQpO1xuXHRcdH1cblx0fVxuXG5cdHNhdmVQYXltZW50KHBheW1lbnQpe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLnNhdmUocGF5bWVudCkudGhlbigoKT0+e1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUGF5bWVudHMnXSk7XG5cdFx0fSk7XG5cdH1cblxuXHRhZGRQYXltZW50KHBheW1lbnQpe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLnNhdmUocGF5bWVudCkudGhlbigocmVzcCk9Pntcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1BheW1lbnRzJ10pO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMucGF5bWVudCA9IHtwcm92aWRlcjoge25hbWU6ICcnfSwgdmFsdWU6ICcnLCBwYXltZW50X2Zvcm06ICcnfVxuXG5cdFx0aWYodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpKXtcblx0XHRcdHJldHVybiB0aGlzLmdldFBheW1lbnRzKCk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
