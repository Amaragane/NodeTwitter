module.exports = {
  apps: [
    {
      name: "twitter",
      script: "./bin/www",
      watch: true,
      autorestart: true,
      instances: "max",
      env: {
        NODE_ENV: "dev",
      },
      env_production: {
        NODE_ENV: "prod",
      },
    },
  ],
};
