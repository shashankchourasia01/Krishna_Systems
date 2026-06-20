import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const brandDir = path.join(publicDir, 'brand')

const SOURCE = path.join(brandDir, 'logo-k-source.png')

function removeBlackBackground(buffer) {
  const out = Buffer.from(buffer)
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i]
    const g = out[i + 1]
    const b = out[i + 2]
    const luminance = r + g + b
    // Only strip near-pure black backdrop; keep charcoal logo strokes
    if (luminance < 18) {
      out[i + 3] = 0
    }
  }
  return out
}

function tintVisiblePixels(buffer, { r, g, b }) {
  const out = Buffer.from(buffer)
  for (let i = 0; i < out.length; i += 4) {
    if (out[i + 3] > 0) {
      out[i] = r
      out[i + 1] = g
      out[i + 2] = b
    }
  }
  return out
}

async function loadSource() {
  return sharp(SOURCE).ensureAlpha().png().toBuffer()
}

async function buildLogoVariant(sourceBuffer, tint) {
  const meta = await sharp(sourceBuffer).metadata()
  const { data, info } = await sharp(sourceBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  let processed = removeBlackBackground(data)
  if (tint) {
    processed = tintVisiblePixels(processed, tint)
  }

  const pipeline = sharp(processed, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png()

  // Web-optimized size for header/footer
  return pipeline.resize(256, 256, {
    fit: 'inside',
    withoutEnlargement: true,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
}

async function squareIcon(pngPipeline, size, paddingRatio = 0.03) {
  const trimmed = await pngPipeline.clone().trim({ threshold: 12 }).png().toBuffer()
  const meta = await sharp(trimmed).metadata()
  const target = Math.round(size * (1 - paddingRatio * 2))
  const scale = target / Math.max(meta.width, meta.height)
  const newW = Math.round(meta.width * scale)
  const newH = Math.round(meta.height * scale)

  const resized = await sharp(trimmed)
    .resize(newW, newH, { fit: 'fill' })
    .png()
    .toBuffer()

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
}

async function main() {
  await mkdir(brandDir, { recursive: true })

  const sourcePng = await loadSource()
  // Source is copied manually or from workspace assets; skip re-writing if already present

  const darkMark = await buildLogoVariant(sourcePng, { r: 30, g: 41, b: 59 }) // slate-800
  const lightMark = await buildLogoVariant(sourcePng, { r: 248, g: 250, b: 252 }) // slate-50

  await darkMark.toFile(path.join(brandDir, 'logo-dark.png'))
  await lightMark.toFile(path.join(brandDir, 'logo-light.png'))

  const faviconDark = await squareIcon(darkMark, 32)
  const favicon192Dark = await squareIcon(darkMark, 192)
  const favicon512 = await squareIcon(darkMark, 512)

  await faviconDark.toFile(path.join(publicDir, 'favicon-32x32.png'))
  await favicon192Dark.toFile(path.join(publicDir, 'favicon-192x192.png'))
  await favicon512.toFile(path.join(publicDir, 'favicon-512x512.png'))
  await favicon192Dark.toFile(path.join(publicDir, 'apple-touch-icon.png'))

  // PNG favicon for broad browser support
  await faviconDark.toFile(path.join(publicDir, 'favicon.png'))

  console.log('Brand assets generated in public/brand and public/favicon-*')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
