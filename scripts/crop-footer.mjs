import sharp from 'sharp';

async function cropFooter() {
  const meta = await sharp('./public/screenshot-bottom.png').metadata();
  await sharp('./public/screenshot-bottom.png')
    .extract({ left: 0, top: 6800, width: meta.width, height: meta.height - 6800 })
    .toFile('./public/screenshot-footer.png');
}

cropFooter().catch(console.error);

