import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Payment} from '../payment';
import {ProviderService} from '../../providers/provider.service';
import {Provider} from '../../providers/provider';
import {PaymentService} from '../payment.service';

@Component({
    selector: 'payment-form',
    templateUrl: './dev/payments/payment-form/payment-form.template.html',
	styles: [`
		.alert {
			padding: 10px;
			margin-top: 46px;
		}
	`],
	styleUrls: ["./src/css/btn.css"],
	providers: [PaymentService, ProviderService],
	directives:[]
})

export class PaymentformComponent {
	public payment: Payment;
	public isEdit;
	public errorMsg;
	public providers = [];

	constructor(private _router: Router, private _routeParams: RouteParams,
				private _paymentService: PaymentService, private _providerService: ProviderService){}

	getPayments(){
		this.isEdit = true;
		this._paymentService.getById({
			_id: this._routeParams.get('id')
		}).then((payment: Payment) => {
			this.payment = payment;
		});
	}

	getProviders(){
		this._providerService.get().then((providers: Provider[]) => {
			this.providers = providers;
		});
	}

	removePayments(payment){
		if(confirm("You sure you want to delete this record ?")){
			this._paymentService.remove(payment).then((resp)=>{
				this._router.navigate(['Payments']);
			});
		}
	}

	checkPayment(paymentForm, payment){
		if(!paymentForm.form.valid){
			this.errorMsg = "Please, fill all fields in red";
			return;
		}

		if(this.isEdit){
			return this.savePayment(payment);
		}else {
			return this.addPayment(payment);
		}
	}

	savePayment(payment){
		this._paymentService.save(payment).then(()=>{
			this._router.navigate(['Payments']);
		});
	}

	addPayment(payment){
		this._paymentService.save(payment).then((resp)=>{
			this._router.navigate(['Payments']);
		});
	}

	ngOnInit():any {
		this.payment = {provider: {name: ''}, value: '', payment_form: ''}

		this.getProviders();

		if(this._routeParams.get('id')){
			return this.getPayments();
		}

	}
}
