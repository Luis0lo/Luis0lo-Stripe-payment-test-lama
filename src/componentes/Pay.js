import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KEY = 'your striple client key'

const Pay = () => {
  let navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    // console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          //this end point is from you express api
          'http://localhost:5000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div>
      <div>Pay</div>
      {stripeToken ? (
        <span>Processing, Please wait...</span>
      ) : (
        <StripeCheckout
          name="crochetIsland"
          image=""
          billingAddress
          shippingAddress
          description=" Your total is 20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button>CHECKOUT NOW</button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
