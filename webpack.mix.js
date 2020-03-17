const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

/*  este codigo nos permite quitar los notificaciones de cada vez que guardamos cambios 
  this command allows us to remove notifications every time we save changes */
   mix.disableNotifications();
