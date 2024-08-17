// Web vitals
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        try {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        } catch (error) {
          console.error('Error collecting Web Vitals:', error);
        }
      })
      .catch(error => console.error('Error loading Web Vitals library:', error));
  }
};

export default reportWebVitals;