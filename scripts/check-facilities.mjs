import sharp from 'sharp';

async function main() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const outDir = './public/images';

  // Facilities strip in Bright (y around 1140 to 1230, x: 350 to 820)
  await sharp(bright)
    .extract({ left: 360, top: 1140, width: 450, height: 80 })
    .jpeg({ quality: 90 })
    .toFile('./public/images/facilities-strip.jpg');

  // Let's also check Teachers classroom in Bright (y around 1250 to 1380, x: 50 to 450)
  await sharp(bright)
    .extract({ left: 50, top: 1250, width: 400, height: 130 })
    .jpeg({ quality: 90 })
    .toFile('./public/images/teachers-strip.jpg');

  // Let's also check Gallery in Bright (y around 1440 to 1560, x: 50 to 800)
  await sharp(bright)
    .extract({ left: 50, top: 1440, width: 750, height: 100 })
    .jpeg({ quality: 90 })
    .toFile('./public/images/gallery-strip.jpg');
}

main().catch(console.error);
