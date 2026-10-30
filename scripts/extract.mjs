import sharp from 'sharp';
import path from 'path';

async function extractClean() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const mockup = './public/reference/Wee Sprites Preschool Website Mockup.png';
  const outDir = './public/images';

  // 1. Hero Child (Smiling girl with hands on chin, without the overlapping badge)
  await sharp(bright)
    .extract({ left: 518, top: 40, width: 250, height: 250 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'hero-child.jpg'));

  // 2. About Photo (3 children at table)
  await sharp(bright)
    .extract({ left: 120, top: 322, width: 205, height: 140 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'about-child.jpg'));

  // 3. Program Cards (6 clean photo crops)
  await sharp(bright).extract({ left: 40, top: 540, width: 115, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-playgroup.jpg'));
  await sharp(bright).extract({ left: 180, top: 540, width: 115, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-prenursery.jpg'));
  await sharp(bright).extract({ left: 322, top: 540, width: 115, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-nursery.jpg'));
  await sharp(bright).extract({ left: 464, top: 540, width: 115, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-lkg.jpg'));
  await sharp(bright).extract({ left: 606, top: 540, width: 115, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-ukg.jpg'));
  await sharp(bright).extract({ left: 742, top: 540, width: 92, height: 75 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'program-evening.jpg'));

  // 4. Learning Approach (3 cards)
  await sharp(bright).extract({ left: 355, top: 700, width: 155, height: 100 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'learning-creative.jpg'));
  await sharp(bright).extract({ left: 550, top: 700, width: 155, height: 100 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'learning-handson.jpg'));
  await sharp(bright).extract({ left: 735, top: 700, width: 100, height: 100 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'learning-social.jpg'));

  // 5. Why Choose (Boy pointing up without the badge)
  await sharp(bright).extract({ left: 580, top: 885, width: 140, height: 180 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'why-choose-child.jpg'));

  // 6. Facilities (4 cards)
  await sharp(bright).extract({ left: 372, top: 1092, width: 114, height: 72 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-classrooms.jpg'));
  await sharp(bright).extract({ left: 522, top: 1092, width: 114, height: 72 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-indoor-play.jpg'));
  await sharp(bright).extract({ left: 672, top: 1092, width: 114, height: 72 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'facility-learning-resources.jpg'));

  // 7. Teachers Classroom
  await sharp(bright).extract({ left: 65, top: 1195, width: 330, height: 140 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'teachers-classroom.jpg'));

  // 8. Gallery
  await sharp(bright).extract({ left: 60, top: 1405, width: 130, height: 95 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gallery-classroom.jpg'));
  await sharp(bright).extract({ left: 220, top: 1405, width: 130, height: 95 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gallery-arts.jpg'));
  await sharp(bright).extract({ left: 380, top: 1405, width: 130, height: 95 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gallery-group-play.jpg'));
  await sharp(bright).extract({ left: 540, top: 1405, width: 130, height: 95 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gallery-festival.jpg'));

  // 9. Admissions
  await sharp(bright).extract({ left: 745, top: 1535, width: 90, height: 140 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'admissions-child.jpg'));

  // 10. Franchise
  await sharp(bright).extract({ left: 730, top: 1685, width: 105, height: 105 }).jpeg({ quality: 95 }).toFile(path.join(outDir, 'franchise-child.jpg'));

  console.log('Clean extraction complete!');
}

extractClean().catch(console.error);
