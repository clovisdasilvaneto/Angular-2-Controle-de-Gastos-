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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzL3BheW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFDQyx3QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFJLENBQUM7Z0JBRW5DLDRCQUFHLEdBQUg7b0JBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDO3lCQUMxRCxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRixnQ0FBTyxHQUFQLFVBQVEsT0FBZ0I7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO3lCQUN0RSxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw2QkFBSSxHQUFKLFVBQUssT0FBZ0I7b0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDZCQUFJLEdBQUosVUFBSyxPQUFnQjtvQkFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUs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b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBMEViLHFCQUFDO1lBQUQsQ0F4RUEsQUF3RUMsSUFBQTtZQXhFRCwyQ0F3RUMsQ0FBQSIsImZpbGUiOiJwYXltZW50cy9wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1BheW1lbnR9IGZyb20gXCIuL3BheW1lbnRcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG5cdGdldCgpOiBQcm9taXNlPFBheW1lbnRbXT4ge1xuXHQgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wYXltZW50cy8nKVxuXHRcdCAgLnRvUHJvbWlzZSgpXG5cdFx0ICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0ICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdCB9XG5cblx0Z2V0QnlJZChwYXltZW50OiBQYXltZW50KTogUHJvbWlzZTxQYXltZW50W10+IHtcblx0ICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvJytwYXltZW50Ll9pZClcblx0XHQgIC50b1Byb21pc2UoKVxuXHRcdCAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdCAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0c2F2ZShwYXltZW50OiBQYXltZW50KTogUHJvbWlzZTxQYXltZW50Pntcblx0XHRpZihwYXltZW50Ll9pZCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXQocGF5bWVudCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBvc3QocGF5bWVudCk7XG5cdH1cblxuXHRwb3N0KHBheW1lbnQ6IFBheW1lbnQpOiBQcm9taXNlPFBheW1lbnQ+e1xuXHQgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3BheW1lbnRzLyc7XG5cblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBheW1lbnQpLCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0cHV0KHBheW1lbnQ6IFBheW1lbnQpOiBQcm9taXNlPFBheW1lbnQ+e1xuXHQgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3BheW1lbnRzLycrcGF5bWVudC5faWQ7XG5cblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgSlNPTi5zdHJpbmdpZnkocGF5bWVudCksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRyZW1vdmUocGF5bWVudDogUGF5bWVudCk6IFByb21pc2U8UGF5bWVudD57XG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvJytwYXltZW50Ll9pZDtcblxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0YnVsa1JlbW92ZShwYXltZW50cyk6IFByb21pc2U8UGF5bWVudD57XG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGF5bWVudHMvYnVsa1JlbW92ZS8nO1xuXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdCAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShwYXltZW50cyksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
