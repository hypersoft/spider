#!/bin/spider --shell-script

/* global function Shell(cmd), parameter */

x = Shell.buffer(8, 2);
x.double = true;
//echo("is double:", x.double);
x[0] = 10.1;
x[1] = 10.2;
print(x[0], " = *((double *)", x.name, ")", '\n');
echo(Shell.buffer.slice(x));
echo(Shell.buffer.cut(x)[1]);
exit(0);
// Shell.source("/some/javascript/file.js")
Shell.fd.read(Shell.fd[0], [], 2);

Shell.writeFile('js.out', parameter.join(", ") + '\n');
// Shell.joinFile(FILE, CONTENTS) // for append mode

var fileContent = Shell.readFile('js.out');
echo("file content:", fileContent);

Shell('rm js.out');

Shell.set('SCRIPT', parameter[0]);
// set(VAR, VALUE, TRUE) // don't overwrite if set

echo("environment variable:", Shell.get('SCRIPT'));
Shell.clear('SCRIPT');
echo(Shell.keys());

if (Shell.get('notavar') !== null) {
	echo("testing environment for empty value failed");
}

Shell.writePipe('cat', Shell.readPipe('ls').output);

//echo("you typed: ", Shell.readLine("type something > "));

echo("All properties of Function: Shell:", Object.keys(Shell).join(", "));
echo("exiting...");

exit();

echo("not reached");
