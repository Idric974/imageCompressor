const compress_images = require('compress-images');

let INPUT_path_to_your_images = 'src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
let OUTPUT_path = 'build/img/';

compress_images(
  INPUT_path_to_your_images,
  OUTPUT_path,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
  { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
  { svg: { engine: 'svgo', command: '--multipass' } },
  { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } },
  function (error, completed, statistic) {
    console.log('Error : ' + error);
    console.log('Completed : ' + completed);
    console.log('Statistic : ' + JSON.stringify(statistic));
  }
);
