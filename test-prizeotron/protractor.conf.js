exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./*.spec.js'],
  onPrepare: function(){
    global.isAngularSite = function(flag){
        browser.ignoreSynchronization = !flag;
    };
  }
};