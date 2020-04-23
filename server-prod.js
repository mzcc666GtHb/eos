var exec = require('child_process').exec;
function execute(cmd){

  exec(cmd, function(error, stdout, stderr) {
    if(error){
      console.error(error);
    }
    else{
      console.log("success");
    }
  });

}
execute("export NODE_ENV='production'")


require('babel-core/register')({
  'presets': [
    ['env', {
      'targets': {
        'node': true
      }
    }]
  ]
})
require('./app.js')
