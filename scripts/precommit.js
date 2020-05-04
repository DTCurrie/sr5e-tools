const { relative, resolve } = require('path');
const { exec } = require('child_process');

const hooks = {
  'apps/run-generator': [
    'node node_modules/@vue/cli-service/bin/vue-cli-service.js lint',
    'node node_modules/prettier/bin-prettier.js --write src',
  ],
  'tools/game-mechanics': [
    'node node_modules/eslint/bin/eslint.js --ext .ts --cache --fix',
    'node node_modules/prettier/bin-prettier.js --write src',
  ],
};

const projects = Object.keys(hooks);

const executeCommand = (cwd, command) => {
  console.log(`Executing ${cwd} ${command}`);
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout) => {
      if (error) {
        reject(error);
      }

      console.log(`Executed ${cwd} ${command}`);
      resolve(stdout);
    });
  });
};

exec(
  'node node_modules/staged-git-files/bin/cli.js',
  async (error, stdout, stderr) => {
    if (error) {
      console.error(`${error.name} (${error.code} ${error.message})`);
      console.error(stderr);
      process.exit(1);
    }

    for (let i = 0; i < projects.length; i++) {
      const path = projects[i];
      const pattern = new RegExp(`(Modified|Added) ${path}`, 'g');

      if (stdout.match(pattern)) {
        console.log(`Changes detected in ${path}`);
        const projectCommands = hooks[path];
        await projectCommands.reduce(async (previous, command) => {
          try {
            await previous;
            return executeCommand(path, command);
          } catch (error) {
            console.error(`Error executing ${path} ${command}`);
            console.error(`${error.name} (${error.code} ${error.message})`);
          }
        }, Promise.resolve());
      }
    }
  }
);
