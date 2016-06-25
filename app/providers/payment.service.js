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
                PaymentService.prototype.get = function () {
                    return this.http.get('http://localhost:8000/api/payments/')
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.getById = function (payment) {
                    return this.http.get('http://localhost:8000/api/payments/' + payment._id)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.save = function (payment) {
                    if (payment._id) {
                        return this.put(payment);
                    }
                    return this.post(payment);
                };
                PaymentService.prototype.post = function (payment) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/payments/';
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(url, JSON.stringify(payment), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.put = function (payment) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/payments/' + payment._id;
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(url, JSON.stringify(payment), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.remove = function (payment) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/payments/' + payment._id;
                    headers.append('Content-Type', 'application/json');
                    return this.http.delete(url, { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PaymentService.prototype.bulkRemove = function (payments) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/payments/bulkRemove/';
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(url, JSON.stringify(payments), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0Msd0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBSSxDQUFDO2dCQUVuQyw0QkFBRyxHQUFIO29CQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQzt5QkFDMUQsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUYsZ0NBQU8sR0FBUCxVQUFRLE9BQWdCO29CQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzt5QkFDdEUsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLE9BQWdCO29CQUNwQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw2QkFBSSxHQUFKLFVBQUssT0FBZ0I7b0JBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFHLHFDQUFxQyxDQUFDO29CQUVuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ3ZFLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDRCQUFHLEdBQUgsVUFBSSxPQUFnQjtvQkFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxHQUFHLEdBQUcscUNBQXFDLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFFL0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUN0RSxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCwrQkFBTSxHQUFOLFVBQU8sT0FBZ0I7b0JBQ25CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFHLHFDQUFxQyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBRS9ELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ2hELFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxRQUFRO29CQUNmLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFHLGdEQUFnRCxDQUFDO29CQUU5RCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ3hFLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVPLG9DQUFXLEdBQW5CLFVBQW9CLEtBQVU7b0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBekVGO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQTBFYixxQkFBQztZQUFELENBeEVBLEFBd0VDLElBQUE7WUF4RUQsMkNBd0VDLENBQUEiLCJmaWxlIjoicHJvdmlkZXJzL3BheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7UGF5bWVudH0gZnJvbSBcIi4vcGF5bWVudFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblx0Z2V0KCk6IFByb21pc2U8UGF5bWVudFtdPiB7XG5cdCAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3BheW1lbnRzLycpXG5cdFx0ICAudG9Qcm9taXNlKClcblx0XHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0IH1cblxuXHRnZXRCeUlkKHBheW1lbnQ6IFBheW1lbnQpOiBQcm9taXNlPFBheW1lbnRbXT4ge1xuXHQgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wYXltZW50cy8nK3BheW1lbnQuX2lkKVxuXHRcdCAgLnRvUHJvbWlzZSgpXG5cdFx0ICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0ICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRzYXZlKHBheW1lbnQ6IFBheW1lbnQpOiBQcm9taXNlPFBheW1lbnQ+e1xuXHRcdGlmKHBheW1lbnQuX2lkKXtcblx0XHRcdHJldHVybiB0aGlzLnB1dChwYXltZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucG9zdChwYXltZW50KTtcblx0fVxuXG5cdHBvc3QocGF5bWVudDogUGF5bWVudCk6IFByb21pc2U8UGF5bWVudD57XG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvJztcblxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocGF5bWVudCksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRwdXQocGF5bWVudDogUGF5bWVudCk6IFByb21pc2U8UGF5bWVudD57XG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvJytwYXltZW50Ll9pZDtcblxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShwYXltZW50KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdHJlbW92ZShwYXltZW50OiBQYXltZW50KTogUHJvbWlzZTxQYXltZW50Pntcblx0ICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0ICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wYXltZW50cy8nK3BheW1lbnQuX2lkO1xuXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdCAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRidWxrUmVtb3ZlKHBheW1lbnRzKTogUHJvbWlzZTxQYXltZW50Pntcblx0ICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0ICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wYXltZW50cy9idWxrUmVtb3ZlLyc7XG5cblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBheW1lbnRzKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
