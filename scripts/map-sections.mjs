import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function mapSections() {
  const bright = './public/reference/Wisprites Preschool_ Bright Beginnings.png';
  const mockup = './public/reference/Wee Sprites Preschool Website Mockup.png';
  const debugDir = './public/debug';
  if (!fs.existsSync(debugDir)) fs.mkdirSync(debugDir, { recursive: true });

  const bMeta = await sharp(bright).metadata();
  console.log('Bright height:', bMeta.height); // 1877

  // Save 12 vertical slices of bright (approx 150px each):
  for (let i = 0; i < 12; i++) {
    const top = Math.floor((i * bMeta.height) / 12);
    const height = Math.floor(bMeta.height / 12);
    await sharp(bright)
      .extract({ left: 0, top, width: bMeta.width, height })
      .jpeg({ quality: 80 })
      .toFile(path.join(debugDir, `bright-slice-${i}-${top}px.jpg`));
  }

  const mMeta = await sharp(mockup).metadata();
  console.log('Mockup height:', mMeta.height); // 1783

  for (let i = 0; i < 12; i++) {
    const top = Math.floor((i * mMeta.height) / 12);
    const height = Math.floor(mMeta.height / 12);
    await sharp(mockup)
      .extract({ left: 0, top, width: mMeta.width, height })
      .jpeg({ quality: 80 })
      .toFile(path.join(debugDir, `mockup-slice-${i}-${top}px.jpg`));
  }

  console.log('Saved debug slices!');
}

mapSections().catch(console.error);

