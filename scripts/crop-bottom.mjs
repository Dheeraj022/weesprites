import sharp from 'sharp';

async function cropBottom() {
  const meta = await sharp('./public/screenshot-bottom.png').metadata();
  await sharp('./public/screenshot-bottom.png')
    .extract({ left: 0, top: 4800, width: meta.width, height: meta.height - 4800 })
    .toFile('./public/screenshot-bottom-cropped.png');
}

cropBottom().catch(console.error);

