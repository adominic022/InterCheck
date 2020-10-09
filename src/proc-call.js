
var is = require("electron-is");


// Window Only - Targets Batch Files

function appendOutput(msg) {
    getCommandOutput().value += (msg + '\n');
}

function setStatus(msg) {
    getStatus().innerHTML = msg;
}


function showOS() {
    if (is.windows())
    {
       //appendOutput("Using Windows.")
    }
    else
    {
        appendOutput("InterCheck does not support non-Window OS :(")
    }
}

function clearContent(elem) {
  document.getElementById('command-output').value = "";
}

function backgroundProcess() {
    const process = require('child_process')

    showOS();

    var cmd = 'console.bat';    
    console.log('cmd:', cmd);

    var child = process.spawn(cmd); 

    child.on('error', function(err) {
      appendOutput('stderr: <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutput(data);
    });

    child.stderr.on('data', function (data) {
      appendOutput('stderr: <'+data+'>' );
    });

    child.on('close', function (code) {
        if (code == 0)
          {}
        //setStatus('child process complete.');
        else
          setStatus('child process exited with code ' + code);

       // getCommandOutput().style.background = "DarkGray";
    });
}