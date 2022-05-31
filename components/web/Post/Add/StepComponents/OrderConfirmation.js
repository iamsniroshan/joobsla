import React, {useContext} from 'react'
import { AddPostWizardContext } from 'components/context';

const OrderConfirmation = () => {
    const { postDetails } = useContext(AddPostWizardContext);
    return (
        <>
            <center>
                {/* <img alt="" className="img-circle" src={SuccessIcon} width="50px" height="50px" /> */}
                <br /><br />
                {JSON.stringify(postDetails)}
                <h4>Your order has been successfully placed!</h4>
                <br /><br />
            </center>
        </>
    )
}
export default OrderConfirmation