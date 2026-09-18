# Mobile announcement source images

## Shared phone artwork

The post reuses `static/public/creator/mobile/android-cover.png`, `live-preview.png`, and `branching-choices.png`. These assets were already resized and compressed with `pngquant --quality=95-100`; no new copies or recompression are needed. Originals remain in `../routevn-store-listing/google-play/assets/en-US/2026-09-06/`. The reused images were visually checked for this post.

## Review screenshot

- Source: user-supplied `Screenshot 2026-09-18 at 11.11.41.png`, a five-star Google Play Store review with its Portuguese original and English translation.
- Unmodified original preserved as `creator-review-original.png` beside this file; retained at original quality as a source asset.
- Website asset: `static/public/blog/2026/20/creator-review.png`.
- Original 1219 × 366 dimensions retained for the 624-pixel article column, high-density displays, and fullscreen previews. No upscaling or cropping.
- Compressed with `pngquant --quality=95-100 --speed 1 --strip`, from 78,105 to 27,043 bytes.
- Optimized screenshot visually checked for legibility and artifacts.

## Tablet orientation screenshots

- User-supplied portrait source: `258C73E2-19DD-419B-9B37-5B70DE3E8217.png`, preserved unchanged as `tablet-portrait-original.png` beside this file.
- User-supplied landscape source: `8016C6F6-30E5-4040-B97B-508CEA7F9553.png`, preserved unchanged as `tablet-landscape-original.png` beside this file.
- Removed only the top 64-pixel system status bar from both images using ImageMagick. The app interface and keyboard remain intact.
- Portrait: cropped from 1488 × 2266 to 1488 × 2202, then resized proportionally to 1080 × 1598 for a maximum 440-pixel display width and fullscreen previews.
- Landscape: cropped from 2266 × 1488 to 2266 × 1424, then resized proportionally to 1600 × 1005 for the 624-pixel article width and fullscreen previews.
- Website assets: `static/public/blog/2026/20/tablet-portrait.png` and `tablet-landscape.png`.
- Compressed both resized PNGs with `pngquant --quality=95-100 --speed 1 --strip`. No upscaling; unchanged originals are retained as source assets.
- Final sizes: portrait 336,948 bytes; landscape 186,361 bytes. Both optimized images were visually checked: status bars are removed, app content remains intact, and text is legible.
