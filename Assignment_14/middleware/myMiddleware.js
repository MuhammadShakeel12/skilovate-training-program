const myMiddleware = (req, res, next) => {
    console.log('Entered in Middleware');
    next();
  };

module.exports = myMiddleware;