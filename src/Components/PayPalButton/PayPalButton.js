import React, { useContext } from 'react';

import { userContext } from '../../userContext';

import { PayPalButton } from 'react-paypal-button-v2';
import { db } from '../../firebase';

function PayPal({ amount }) {
    console.log('💰', amount);

    const [user] = useContext(userContext);

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
