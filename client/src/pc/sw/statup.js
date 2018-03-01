export default function() {
  if ('serviceWorker' in navigator) {
    const { DIST } = process.env;
  
    navigator.serviceWorker.register(`${DIST}/javascripts/sw.js`, { scope: '/' }).then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  }
}