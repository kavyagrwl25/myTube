// asyncHandler.js is a utility function that wraps asynchronous route handlers in Express.js to catch errors and pass them to the next middleware (error handler). This helps to avoid repetitive try-catch blocks in each route handler and ensures that errors are properly handled.


const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
};  


export {asyncHandler};

//explaining the code:
// The asyncHandler function takes a requestHandler (an asynchronous function that handles an Express route) as an argument and returns a new function. This new function is what will be used as the route handler in Express. 

// Usage example:
// const express = require('express');
// const app = express();
// const asyncHandler = require('./utils/asyncHandler');    