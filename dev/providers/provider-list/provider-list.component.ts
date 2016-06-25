import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Provider} from '../provider';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {ProviderService} from '../provider.service';
import {BulkRemove} from '../../directives/bulk-remove.directive';

@Component({
    selector: 'provider-list',
    templateUrl: './dev/providers/provider-list/provider-list.template.html',
	styleUrls: ["./src/css/btn.css"],
	providers: [ProviderService],
	directives:[ROUTER_DIRECTIVES, BulkRemove]
})

export class ProviderListComponent {
	public providers: Provider[] = null;
	public hasProvider = null;

	constructor(private _router: Router, private _providerService:ProviderService){}

	getProviders(){
		this._providerService.get().then((providers: Provider[]) => {
			this.providers = providers;
		});
	}

	editByProvider(provider){
		this._router.navigate(['ProviderFormFromProvider', {id: provider._id}])
	}

	checkProviders(providers){
		setTimeout(() => {
			this.hasProvider = providers.some(provider => provider.selected);
		}, 100);
	}

	removeProviders({value, todosChecked}){
		this._providerService.bulkRemove({ids: value}).then(() => this.changeProvidersView(todosChecked));
	}

	changeProvidersView(providersChecked){
		var index;

		providersChecked.forEach(function(provider){
			index = this.providers.indexOf(provider);
			this.providers.splice(index, 1);
		}.bind(this))
	}

	ngOnInit():any {
		return this.getProviders();
	}
}
