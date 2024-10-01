module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};



function onGooglePayLoaded() {
  const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

  const button = paymentsClient.createButton({
      onClick: onGooglePaymentButtonClicked
  });

  document.getElementById('pay-button').appendChild(button);
}

function onGooglePaymentButtonClicked() {
  const paymentDataRequest = getGooglePaymentDataRequest();

  const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

  paymentsClient.loadPaymentData(paymentDataRequest)
      .then(function(paymentData) {
          // Отправляем данные на сервер
          fetch('/process-payment', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(paymentData),
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  console.log('Оплата успешна');
              } else {
                  console.error('Ошибка оплаты:', data.error);
              }
          })
          .catch(error => console.error('Ошибка:', error));
      })
      .catch(function(err) {
          console.error('Ошибка оплаты:', err);
      });
}

function getGooglePaymentDataRequest() {
  return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA']
          },
          tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleMerchantId'
              }
          }
      }],
      merchantInfo: {
          merchantId: 'your-merchant-id',
          merchantName: 'Your Merchant Name'
      },
      transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '10.00',
          currencyCode: 'USD',
          countryCode: 'US'
      }
  };
}

