import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Provider} from '../provider';
import {ProviderService} from '../provider.service';

@Component({
    selector: 'provider-form',
    templateUrl: './dev/providers/provider-form/provider-form.template.html',
	styleUrls: ["./src/css/btn.css"],
	providers: [ProviderService],
	directives:[]
})

export class ProviderFormComponent {
	public provider: Provider;
	public isEdit;
	public errorMsg;

	constructor(private _router: Router, private _routeParams: RouteParams,
				private _providerService: ProviderService){}

	getProviders(){
		this.isEdit = true;
		this._providerService.getById({
			_id: this._routeParams.get('id')
		}).then((provider: Provider) => {
			this.provider = provider;
		});
	}

	removeProviders(provider){
		if(confirm("You sure you want to delete this record ?")){
			this._providerService.remove(provider).then((resp)=>{
				this._router.navigate(['Providers']);
			});
		}
	}

	checkProvider(providerForm, provider){
		if(!providerForm.form.valid){
			this.errorMsg = "Please, fill all fields in red";
			return;
		}

		if(this.isEdit){
			return this.saveProvider(provider);
		}else {
			return this.addProvider(provider);
		}
	}

	saveProvider(provider){
		this._providerService.save(provider).then(()=>{
			this._router.navigate(['Providers']);
		});
	}

	addProvider(provider){
		this._providerService.save(provider).then((resp)=>{
			this._router.navigate(['Providers']);
		});
	}

	ngOnInit():any {
		this.provider = {name: '', account_number: ''}

		if(this._routeParams.get('id')){
			return this.getProviders();
		}

	}
}
