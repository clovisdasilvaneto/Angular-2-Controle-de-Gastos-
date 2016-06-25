export interface Payment {
	_id: string,
	provider: {
		name: string
	},
	payment_form: string,
	value: number
}
