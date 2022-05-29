import React, {useContext} from 'react'
import OrderContext from '../OrderContext';

const OrderConfirmation = () => {
    const { postDetails } = useContext(OrderContext);
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