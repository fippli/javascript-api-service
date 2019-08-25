/**
 * 
 * @param {*} requestTime 
 * @param {*} url 
 * @param {*} method 
 */
const measureResponseTime = (requestTime, url, method) => response => {
  if (process.env.NODE_ENV === 'development') {
    const responseTime = performance.now() - requestTime;
    console.log(`
    ${method} request 
    to ${url}
    took ${responseTime}

    Message: ${response.message || 'No message specified'}
    `);
  }

  return response;
};

module.exports = measureResponseTime;