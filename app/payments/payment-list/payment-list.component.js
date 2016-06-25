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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzL3BheW1lbnQtbGlzdC9wYXltZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFJQyw4QkFBb0IsT0FBZSxFQUFVLGVBQThCO29CQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQUhwRSxhQUFRLEdBQWMsSUFBSSxDQUFDO29CQUMzQixlQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUVvRCxDQUFDO2dCQUU5RSwwQ0FBVyxHQUFYO29CQUFBLGlCQUlDO29CQUhBLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBbUI7d0JBQ25ELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELDRDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3JFLENBQUM7Z0JBRUQsNENBQWEsR0FBYixVQUFjLFFBQVE7b0JBQXRCLGlCQUlDO29CQUhBLFVBQVUsQ0FBQzt3QkFDVixLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsUUFBUSxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBQzlELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDVCxDQUFDO2dCQUVELDZDQUFjLEdBQWQsVUFBZSxFQUFxQjtvQkFBcEMsaUJBRUM7d0JBRmUsZ0JBQUssRUFBRSw4QkFBWTtvQkFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO2dCQUNqRyxDQUFDO2dCQUVELGlEQUFrQixHQUFsQixVQUFtQixlQUFlO29CQUNqQyxJQUFJLEtBQUssQ0FBQztvQkFFVixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQVMsT0FBTzt3QkFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQkFDZCxDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkE3Q0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHdEQUF3RDt3QkFDeEUsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7d0JBQ2hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLGtDQUFVLENBQUM7cUJBQzFDLENBQUM7O3dDQUFBO2dCQXdDRiwyQkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QsdURBc0NDLENBQUEiLCJmaWxlIjoicGF5bWVudHMvcGF5bWVudC1saXN0L3BheW1lbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BheW1lbnR9IGZyb20gJy4uL3BheW1lbnQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQYXltZW50U2VydmljZX0gZnJvbSAnLi4vcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7QnVsa1JlbW92ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9idWxrLXJlbW92ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BheW1lbnQtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rldi9wYXltZW50cy9wYXltZW50LWxpc3QvcGF5bWVudC1saXN0LnRlbXBsYXRlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcIi4vc3JjL2Nzcy9idG4uY3NzXCJdLFxuXHRwcm92aWRlcnM6IFtQYXltZW50U2VydmljZV0sXG5cdGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLCBCdWxrUmVtb3ZlXVxufSlcblxuZXhwb3J0IGNsYXNzIFBheW1lbnRMaXN0Q29tcG9uZW50IHtcblx0cHVibGljIHBheW1lbnRzOiBQYXltZW50W10gPSBudWxsO1xuXHRwdWJsaWMgaGFzUGF5bWVudCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3BheW1lbnRTZXJ2aWNlOlBheW1lbnRTZXJ2aWNlKXt9XG5cblx0Z2V0UGF5bWVudHMoKXtcblx0XHR0aGlzLl9wYXltZW50U2VydmljZS5nZXQoKS50aGVuKChwYXltZW50czogUGF5bWVudFtdKSA9PiB7XG5cdFx0XHR0aGlzLnBheW1lbnRzID0gcGF5bWVudHM7XG5cdFx0fSk7XG5cdH1cblxuXHRlZGl0QnlQYXltZW50KHBheW1lbnQpe1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1BheW1lbnRGb3JtRnJvbVBheW1lbnQnLCB7aWQ6IHBheW1lbnQuX2lkfV0pXG5cdH1cblxuXHRjaGVja1BheW1lbnRzKHBheW1lbnRzKXtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuaGFzUGF5bWVudCA9IHBheW1lbnRzLnNvbWUocGF5bWVudCA9PiBwYXltZW50LnNlbGVjdGVkKTtcblx0XHR9LCAxMDApO1xuXHR9XG5cblx0cmVtb3ZlUGF5bWVudHMoe3ZhbHVlLCB0b2Rvc0NoZWNrZWR9KXtcblx0XHR0aGlzLl9wYXltZW50U2VydmljZS5idWxrUmVtb3ZlKHtpZHM6IHZhbHVlfSkudGhlbigoKSA9PiB0aGlzLmNoYW5nZVBheW1lbnRzVmlldyh0b2Rvc0NoZWNrZWQpKTtcblx0fVxuXG5cdGNoYW5nZVBheW1lbnRzVmlldyhwYXltZW50c0NoZWNrZWQpe1xuXHRcdHZhciBpbmRleDtcblxuXHRcdHBheW1lbnRzQ2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uKHBheW1lbnQpe1xuXHRcdFx0aW5kZXggPSB0aGlzLnBheW1lbnRzLmluZGV4T2YocGF5bWVudCk7XG5cdFx0XHR0aGlzLnBheW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHJldHVybiB0aGlzLmdldFBheW1lbnRzKCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
