import sharp from 'sharp';
import path from 'path';

async function extractFinal() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const mockup = './public/reference/Wee Sprites Preschool Website Mockup.png';
  const outDir = './public/images';

  // 1. Admissions girl (face and backpack):
  // In bright slice 9 (top: 1407): girl is at left: 745, top: 1407 + 35 = 1442, width: 90, height: 130
  await sharp(bright)
    .extract({ left: 745, top: 1442, width: 90, height: 130 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'admissions-child.jpg'));

  // 2. Franchise girl (holding yellow paper plane):
  // In bright slice 10 (top: 1564): girl is at left: 730, top: 1564 + 35 = 1599, width: 105, height: 115
  await sharp(bright)
    .extract({ left: 730, top: 1599, width: 105, height: 115 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'franchise-child.jpg'));

  // Also write franchise-growth.jpg as copy
  await sharp(bright)
    .extract({ left: 730, top: 1599, width: 105, height: 115 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'franchise-growth.jpg'));

  console.log('Admissions and franchise assets updated!');
}

extractFinal().catch(console.error);

