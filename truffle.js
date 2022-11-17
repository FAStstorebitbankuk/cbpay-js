import { initOnRamp } from '@coinbase/cbpay-js';

const options = {
  appId: 'your_app_id',
  widgetParameters: {
    destinationWallets: [{
      address: '0xabc123',
      blockchains: ['ethereum', 'avalanche-c-chain'],
    }],
  },
  closeOnExit: true,
  closeOnSuccess: true,
  embeddedContentStyles: {
    target: '#target-area',
  },
  onExit: () => {
    alert('On Exit');
  },
  onSuccess: () => {
    alert('On Success');
  },
  onEvent: (metadata) => {
    console.log(metadata);
  },
}

// Initialize the CB Pay instance
let onrampInstance;
const instance = initOnRamp(options, (error, instance) => {
  onrampInstance = instance;
});

// Open the widget when the user clicks a button
onrampInstance.open();

// When button unmounts destroy the instance
onrampInstance.destroy();
