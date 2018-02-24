if ('serviceWorker' in navigator) {
  const { DIST } = process.env;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${DIST}/sw.js`).then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}