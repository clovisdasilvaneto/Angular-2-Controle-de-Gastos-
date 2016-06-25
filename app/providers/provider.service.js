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
    var ProviderService;
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
            ProviderService = (function () {
                function ProviderService(http) {
                    this.http = http;
                }
                ProviderService.prototype.get = function () {
                    return this.http.get('http://localhost:8000/api/providers/')
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.getById = function (provider) {
                    return this.http.get('http://localhost:8000/api/providers/' + provider._id)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.save = function (provider) {
                    if (provider._id) {
                        return this.put(provider);
                    }
                    return this.post(provider);
                };
                ProviderService.prototype.post = function (provider) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/providers/';
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(url, JSON.stringify(provider), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.put = function (provider) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/providers/' + provider._id;
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(url, JSON.stringify(provider), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.remove = function (provider) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/providers/' + provider._id;
                    headers.append('Content-Type', 'application/json');
                    return this.http.delete(url, { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.bulkRemove = function (providers) {
                    var headers = new http_1.Headers();
                    var url = 'http://localhost:8000/api/providers/bulkRemove/';
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(url, JSON.stringify(providers), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProviderService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                ProviderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProviderService);
                return ProviderService;
            }());
            exports_1("ProviderService", ProviderService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wcm92aWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUNDLHlCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBQUksQ0FBQztnQkFFbkMsNkJBQUcsR0FBSDtvQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUM7eUJBQzNELFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVGLGlDQUFPLEdBQVAsVUFBUSxRQUFrQjtvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7eUJBQ3hFLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDhCQUFJLEdBQUosVUFBSyxRQUFrQjtvQkFDdEIsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDhCQUFJLEdBQUosVUFBSyxRQUFrQjtvQkFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVB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ekVGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTBFYixzQkFBQztZQUFELENBeEVBLEFBd0VDLElBQUE7WUF4RUQsNkNBd0VDLENBQUEiLCJmaWxlIjoicHJvdmlkZXJzL3Byb3ZpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwiLi9wcm92aWRlclwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlclNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG5cdGdldCgpOiBQcm9taXNlPFByb3ZpZGVyW10+IHtcblx0ICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvdmlkZXJzLycpXG5cdFx0ICAudG9Qcm9taXNlKClcblx0XHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0IH1cblxuXHRnZXRCeUlkKHByb3ZpZGVyOiBQcm92aWRlcik6IFByb21pc2U8UHJvdmlkZXJbXT4ge1xuXHQgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm92aWRlcnMvJytwcm92aWRlci5faWQpXG5cdFx0ICAudG9Qcm9taXNlKClcblx0XHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdHNhdmUocHJvdmlkZXI6IFByb3ZpZGVyKTogUHJvbWlzZTxQcm92aWRlcj57XG5cdFx0aWYocHJvdmlkZXIuX2lkKXtcblx0XHRcdHJldHVybiB0aGlzLnB1dChwcm92aWRlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBvc3QocHJvdmlkZXIpO1xuXHR9XG5cblx0cG9zdChwcm92aWRlcjogUHJvdmlkZXIpOiBQcm9taXNlPFByb3ZpZGVyPntcblx0ICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0ICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm92aWRlcnMvJztcblxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocHJvdmlkZXIpLCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0cHV0KHByb3ZpZGVyOiBQcm92aWRlcik6IFByb21pc2U8UHJvdmlkZXI+e1xuXHQgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb3ZpZGVycy8nK3Byb3ZpZGVyLl9pZDtcblxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHQgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShwcm92aWRlciksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRyZW1vdmUocHJvdmlkZXI6IFByb3ZpZGVyKTogUHJvbWlzZTxQcm92aWRlcj57XG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdCAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvdmlkZXJzLycrcHJvdmlkZXIuX2lkO1xuXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdCAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRidWxrUmVtb3ZlKHByb3ZpZGVycyk6IFByb21pc2U8UHJvdmlkZXI+e1xuXHQgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb3ZpZGVycy9idWxrUmVtb3ZlLyc7XG5cblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVycyksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==