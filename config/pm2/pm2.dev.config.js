const { name, output } = require('../config.json');

module.exports = {
  apps: [
    {
      name: name,
      script: `${output.path}/${output.filename}`,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
      autorestart: false,
      // watch: true,
    
    },
  ],
};
