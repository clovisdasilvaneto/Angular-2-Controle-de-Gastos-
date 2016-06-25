System.register(['angular2/core', 'angular2/router', '../payment.service', '../../directives/bulk-remove.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, payment_service_1, bulk_remove_directive_1;
    var PaymentListComponent;
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
            },
            function (bulk_remove_directive_1_1) {
                bulk_remove_directive_1 = bulk_remove_directive_1_1;
            }],
        execute: function() {
            PaymentListComponent = (function () {
                function PaymentListComponent(_router, _paymentService) {
                    this._router = _router;
                    this._paymentService = _paymentService;
                    this.payments = null;
                    this.hasPayment = null;
                }
                PaymentListComponent.prototype.getPayments = function () {
                    var _this = this;
                    this._paymentService.get().then(function (payments) {
                        _this.payments = payments;
                    });
                };
                PaymentListComponent.prototype.editByPayment = function (payment) {
                    this._router.navigate(['PaymentFormFromPayment', { id: payment._id }]);
                };
                PaymentListComponent.prototype.checkPayments = function (payments) {
                    var _this = this;
                    setTimeout(function () {
                        _this.hasPayment = payments.some(function (payment) { return payment.selected; });
                    }, 100);
                };
                PaymentListComponent.prototype.removePayments = function (_a) {
                    var _this = this;
                    var value = _a.value, todosChecked = _a.todosChecked;
                    this._paymentService.bulkRemove({ ids: value }).then(function () { return _this.changePaymentsView(todosChecked); });
                };
                PaymentListComponent.prototype.changePaymentsView = function (paymentsChecked) {
                    var index;
                    paymentsChecked.forEach(function (payment) {
                        index = this.payments.indexOf(payment);
                        this.payments.splice(index, 1);
                    }.bind(this));
                };
                PaymentListComponent.prototype.ngOnInit = function () {
                    return this.getPayments();
                };
                PaymentListComponent = __decorate([
                    core_1.Component({
                        selector: 'payment-list',
                        templateUrl: './dev/payments/payment-list/payment-list.template.html',
                        styleUrls: ["./src/css/btn.css"],
                        providers: [payment_service_1.PaymentService],
                        directives: [router_1.ROUTER_DIRECTIVES, bulk_remove_directive_1.BulkRemove]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, payment_service_1.PaymentService])
                ], PaymentListComponent);
                return PaymentListComponent;
            }());
            exports_1("PaymentListComponent", PaymentListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wYXltZW50LWxpc3QvcGF5bWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBSUMsOEJBQW9CLE9BQWUsRUFBVSxlQUE4QjtvQkFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFIcEUsYUFBUSxHQUFjLElBQUksQ0FBQztvQkFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQztnQkFFb0QsQ0FBQztnQkFFOUUsMENBQVcsR0FBWDtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW1CO3dCQUNuRCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCw0Q0FBYSxHQUFiLFVBQWMsT0FBTztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNyRSxDQUFDO2dCQUVELDRDQUFhLEdBQWIsVUFBYyxRQUFRO29CQUF0QixpQkFJQztvQkFIQSxVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFFBQVEsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO29CQUM5RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCw2Q0FBYyxHQUFkLFVBQWUsRUFBcUI7b0JBQXBDLGlCQUVDO3dCQUZlLGdCQUFLLEVBQUUsOEJBQVk7b0JBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQztnQkFDakcsQ0FBQztnQkFFRCxpREFBa0IsR0FBbEIsVUFBbUIsZUFBZTtvQkFDakMsSUFBSSxLQUFLLENBQUM7b0JBRVYsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFTLE9BQU87d0JBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBN0NGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSx3REFBd0Q7d0JBQ3hFLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBVSxDQUFDO3FCQUMxQyxDQUFDOzt3Q0FBQTtnQkF3Q0YsMkJBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELHVEQXNDQyxDQUFBIiwiZmlsZSI6InByb3ZpZGVycy9wYXltZW50LWxpc3QvcGF5bWVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF5bWVudH0gZnJvbSAnLi4vcGF5bWVudCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BheW1lbnRTZXJ2aWNlfSBmcm9tICcuLi9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHtCdWxrUmVtb3ZlfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2J1bGstcmVtb3ZlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGF5bWVudC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L3BheW1lbnRzL3BheW1lbnQtbGlzdC9wYXltZW50LWxpc3QudGVtcGxhdGUuaHRtbCcsXG5cdHN0eWxlVXJsczogW1wiLi9zcmMvY3NzL2J0bi5jc3NcIl0sXG5cdHByb3ZpZGVyczogW1BheW1lbnRTZXJ2aWNlXSxcblx0ZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIEJ1bGtSZW1vdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudExpc3RDb21wb25lbnQge1xuXHRwdWJsaWMgcGF5bWVudHM6IFBheW1lbnRbXSA9IG51bGw7XG5cdHB1YmxpYyBoYXNQYXltZW50ID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcGF5bWVudFNlcnZpY2U6UGF5bWVudFNlcnZpY2Upe31cblxuXHRnZXRQYXltZW50cygpe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLmdldCgpLnRoZW4oKHBheW1lbnRzOiBQYXltZW50W10pID0+IHtcblx0XHRcdHRoaXMucGF5bWVudHMgPSBwYXltZW50cztcblx0XHR9KTtcblx0fVxuXG5cdGVkaXRCeVBheW1lbnQocGF5bWVudCl7XG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUGF5bWVudEZvcm1Gcm9tUGF5bWVudCcsIHtpZDogcGF5bWVudC5faWR9XSlcblx0fVxuXG5cdGNoZWNrUGF5bWVudHMocGF5bWVudHMpe1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5oYXNQYXltZW50ID0gcGF5bWVudHMuc29tZShwYXltZW50ID0+IHBheW1lbnQuc2VsZWN0ZWQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRyZW1vdmVQYXltZW50cyh7dmFsdWUsIHRvZG9zQ2hlY2tlZH0pe1xuXHRcdHRoaXMuX3BheW1lbnRTZXJ2aWNlLmJ1bGtSZW1vdmUoe2lkczogdmFsdWV9KS50aGVuKCgpID0+IHRoaXMuY2hhbmdlUGF5bWVudHNWaWV3KHRvZG9zQ2hlY2tlZCkpO1xuXHR9XG5cblx0Y2hhbmdlUGF5bWVudHNWaWV3KHBheW1lbnRzQ2hlY2tlZCl7XG5cdFx0dmFyIGluZGV4O1xuXG5cdFx0cGF5bWVudHNDaGVja2VkLmZvckVhY2goZnVuY3Rpb24ocGF5bWVudCl7XG5cdFx0XHRpbmRleCA9IHRoaXMucGF5bWVudHMuaW5kZXhPZihwYXltZW50KTtcblx0XHRcdHRoaXMucGF5bWVudHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9LmJpbmQodGhpcykpXG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGF5bWVudHMoKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
