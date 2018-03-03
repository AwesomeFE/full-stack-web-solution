export default function() {
  const { DIST } = process.env;
  const { NODE_ENV } = process.env;

  if ('serviceWorker' in navigator && NODE_ENV !== 'development') {
    navigator.serviceWorker.register(`${DIST}/javascripts/sw.js`, { scope: '/' }).then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  }
}