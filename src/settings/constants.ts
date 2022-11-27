export const settings = {
  appName: 'Mugg.app',
  appDescription: 'Create your custom avatar and share it with the world!',
  appURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://mugg.app',
}
