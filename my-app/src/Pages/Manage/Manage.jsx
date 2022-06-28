import React from 'react';
import "./Manage.css"

export default function Manage() {
    return (
        <>
            <div className="crypto_form">
                <h1>CryptoCurrencies</h1>
                <form className="cyrp_form">
                    <label for="cryp_name">Cryptocurrency name:</label>
                    <input type="text" id="cryp_name" name="cryp_name"/>

                    <label for="cryp_amount">Amount(in integer or decimal) </label>
                    <input type="number" step="any" id="cryp_amount" name="cryp_amount"/>

                    <label for="cryp_price">Buying Price(in $)</label>
                    <input type="number" step="any" id="cryp_price" name="cryp_price"/>

                    <input type="submit" id="cryp_sub" value="Submit"/>
                </form>
            </div>
        </>
    )
}