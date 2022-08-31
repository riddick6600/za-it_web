module.exports = {
  apps: [
    {
      name: "za-it",
      cwd: "/projects/za-it_web",
      script: "npm run preview",
      autorestart: true,
      env: {
        PORT: "80",
        NODE_ENV: "production",
      },
    },
  ],
};
