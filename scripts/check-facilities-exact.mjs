import sharp from 'sharp';
import path from 'path';

async function checkFacilitiesExact() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const outDir = './public/images';

  // In slice 7 (total width 838):
  // Let's crop cards exactly:
  // Card 1: left 372, width 110, top: 1094 + 5 = 1099, height 68
  await sharp(bright).extract({ left: 372, top: 1098, width: 112, height: 68 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-classrooms.jpg'));
  // Card 2: left 522, width 110, top: 1098, height 68
  await sharp(bright).extract({ left: 522, top: 1098, width: 112, height: 68 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-indoor-play.jpg'));
  // Card 3: left 672, width 110, top: 1098, height 68
  await sharp(bright).extract({ left: 672, top: 1098, width: 112, height: 68 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-learning-resources.jpg'));

  // What is Card 4 in slice 7? Look at the rightmost card in bright-slice-7-1094px.jpg!
  // In bright-slice-7-1094px.jpg: it is at left: 820? Wait! Slice 7 width is 838!
  // Let's check where the 4th card is in Showcase or Mockup!
  const showcase = './public/reference/Wee Sprites Preschool Website Showcase.png';
  const sMeta = await sharp(showcase).metadata();
  console.log('Showcase:', sMeta.width, 'x', sMeta.height);
}

checkFacilitiesExact().catch(console.error);

