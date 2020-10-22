import React from 'react';

import { PayPalButton } from 'react-paypal-button-v2';

function PayPal({ amount }) {
    console.log('💰', amount);

    return (
        <div>
            <PayPalButton
                amount={amount}
                onSuccess={(details) => {
                    alert(
                        `Transaction Completed by ${details.payer.name.given_name}`
                    );
                }}
            />
        </div>
    );
}

export default PayPal;
