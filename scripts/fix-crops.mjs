import sharp from 'sharp';
import path from 'path';

async function extractCorrect() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const outDir = './public/images';

  // Admissions girl face:
  await sharp(bright)
    .extract({ left: 660, top: 1440, width: 130, height: 130 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'admissions-child.jpg'));

  // Franchise girl face:
  await sharp(bright)
    .extract({ left: 650, top: 1600, width: 135, height: 125 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'franchise-child.jpg'));

  await sharp(bright)
    .extract({ left: 650, top: 1600, width: 135, height: 125 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'franchise-growth.jpg'));

  console.log('Fixed admissions and franchise crops!');
}

extractCorrect().catch(console.error);

