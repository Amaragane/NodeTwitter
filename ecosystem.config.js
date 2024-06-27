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
      env_prod: {
        NODE_ENV: "prod",
      },
    },
  ],
};
