System.register(["angular2/core", 'angular2/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PaymentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PaymentService = (function () {
                function PaymentService(http) {
                    this.http = http;
                }
                PaymentService.prototype.getPayments = function () {
                    return this.http.get('http://localhost:8000/api/payments/')
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                PaymentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PaymentService);
                return PaymentService;
            }());
            exports_1("PaymentService", PaymentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzL3BheW1lbnQtbGlzdC9wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0Msd0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBSSxDQUFDO2dCQUVuQyxvQ0FBVyxHQUFYO29CQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQzt5QkFDMUQsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBRU0sb0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtvQkFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFmRjtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFnQmIscUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDJDQWNDLENBQUEiLCJmaWxlIjoicGF5bWVudHMvcGF5bWVudC1saXN0L3BheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7UGF5bWVudH0gZnJvbSBcIi4vcGF5bWVudFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblx0Z2V0UGF5bWVudHMoKTogUHJvbWlzZTxQYXltZW50W10+IHtcblx0ICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvJylcblx0XHQgIC50b1Byb21pc2UoKVxuXHRcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdCAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHQgfVxuXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
