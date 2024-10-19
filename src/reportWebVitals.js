/**
 * Function to report web vitals for performance measurement.
 * It imports the necessary web-vitals functions and calls them with the provided callback.
 * 
 * @param {function} onPerfEntry - Callback function to handle the performance entries.
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * The reportWebVitals function is used to measure and report the performance
 * of the web application. It utilizes the web-vitals library to collect
 * various performance metrics such as Cumulative Layout Shift (CLS),
 * First Input Delay (FID), First Contentful Paint (FCP), Largest Contentful
 * Paint (LCP), and Time to First Byte (TTFB). These metrics help in
 * understanding the user experience and identifying areas for improvement.
 * 
 * The function takes a callback (onPerfEntry) as an argument, which is called
 * with the performance entries. If the callback is a valid function, the
 * web-vitals functions are imported dynamically and executed with the
 * provided callback.
 */

export default reportWebVitals;
