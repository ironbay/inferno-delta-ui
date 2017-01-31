declare const StripeCheckout
import { STRIPE_KEY } from '../../constants'

export default StripeCheckout.configure({
	key: STRIPE_KEY,
	locale: 'auto',
})
