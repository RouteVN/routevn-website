# Creator mobile page assets

The first draft lives at `/en/creator/mobile/`. Its copy comes from the approved feature descriptions in `../routevn-store-listing/google-play/listing.yaml` and `../routevn-store-listing/app-store/listing.yaml`.

## Phone screenshots

All three images are Android store screenshots, identified as Android on the page. They are not iPhone or iPad captures.

Originals remain unchanged in `../routevn-store-listing/google-play/assets/en-US/2026-09-06/phone-screenshots/`.

| Original | Website asset | Original bytes | Optimized bytes |
| --- | --- | ---: | ---: |
| `02.png` | `static/public/creator/mobile/live-preview.png` | 858,312 | 231,849 |
| `04.png` | `static/public/creator/mobile/branching-choices.png` | 692,301 | 186,682 |
| `05.png` | `static/public/creator/mobile/custom-interface.png` | 674,916 | 199,774 |

- Resized from 1080 × 1920 to 864 × 1536 with ImageMagick, without upscaling or cropping.
- Compressed with `pngquant --quality=95-100 --speed 1 --strip`.
- Sized for the three-column gallery, high-density screens, and the existing fullscreen image preview.
- Each optimized image was visually checked for text legibility and obvious artifacts.

## Tablet screenshots

The six supplied files were moved from `/Users/hanyonwu/Downloads/RouteVN 3/` to `../routevn-store-listing/assets/en-US/2026-09-13/tablet-screenshots/`. Original filenames and file contents were preserved; SHA-256 checksums were verified after the move.

The tablet section uses the existing `feature1` template and its screenshot gallery. Portrait proportions are preserved, with no cropping. Images retain the supplied order, `s1.png` through `s6.png`.

| Original | Website asset | Original bytes | Optimized bytes |
| --- | --- | ---: | ---: |
| `s1.png` | `static/public/creator/mobile/tablet/s1.png` | 2,399,198 | 995,061 |
| `s2.png` | `static/public/creator/mobile/tablet/s2.png` | 2,451,474 | 319,778 |
| `s3.png` | `static/public/creator/mobile/tablet/s3.png` | 1,474,101 | 247,027 |
| `s4.png` | `static/public/creator/mobile/tablet/s4.png` | 2,204,515 | 270,690 |
| `s5.png` | `static/public/creator/mobile/tablet/s5.png` | 1,718,375 | 256,820 |
| `s6.png` | `static/public/creator/mobile/tablet/s6.png` | 388,677 | 101,583 |

- Resized from 2048 × 2732 to 1200 × 1601 for the 440-pixel gallery, high-density screens, and fullscreen previews, without upscaling.
- Compressed with `pngquant --quality=95-100 --speed 1 --strip`.
- Exception: `s1.png` could not meet pngquant's minimum quality of 95. The resized image uses lossless PNG compression instead, preserving its colors without lowering the quality threshold.
- All six optimized images were visually checked for text legibility and obvious artifacts.

## Hero cover

The hero uses the Android feature graphic from `../routevn-store-listing/google-play/assets/en-US/2026-09-06/cover.png`. The original remains unchanged.

- Website asset: `static/public/creator/mobile/android-cover.png`
- Preserved 2212 × 1080 dimensions for the 1160-pixel-wide hero on high-density screens; no upscaling or cropping.
- Compressed from 925,158 to 388,800 bytes with `pngquant --quality=95-100 --speed 1 --strip`.
- The optimized cover was visually checked for text legibility and obvious artifacts.

## Google Play icon

The Google Play path in `static/public/rtgl-icons.js` comes from [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/googleplay.svg), under CC0. It uses the existing monochrome icon style. SVG does not need PNG compression.

## Download page app icon

The Makkuro app icon above the download page heading uses `static/public/creator/app-icon.png`. The original remains unchanged at `static/public/media-kit/routevn-square-icon-black.png`.

- Resized from 512 × 512 to 256 × 256 for the 128-pixel display on high-density screens, without upscaling.
- Compressed with `pngquant --quality=95-100 --speed 1 --strip` to 17,106 bytes, from the 111,103-byte original.
- Visually checked the optimized image. The border and rounded corners use the standard image component.

## Mobile download CTA badges

The mobile page CTA and download page use complete black-and-white store badges, with the logo and wording included in each image. They share the `store-badge` partial and `store-badges.css`. Both badges use the same visible artwork height: 96 pixels on larger screens and up to 72 pixels on narrower screens. Google Play appears first, followed by the App Store. Each badge retains its proportions.

- [App Store monochrome SVG](https://asvg.app/assets/svg/app-store-download/app-store-download-badge-mono.svg): community-sourced artwork from the same asvg collection as Google Play. The unchanged source is preserved at `internal/asset-sources/app-store-badge-mono.svg`. The website version, `static/public/creator/mobile/app-store-badge-mono.svg`, uses white artwork on black and fits the viewBox to the existing badge background, matching the Google Play treatment. SVG does not need PNG compression. The previous [Apple-provided badge](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg) remains unchanged at `static/public/creator/mobile/app-store-badge.svg`.
- [Google Play monochrome SVG](https://asvg.app/assets/svg/google-play-download/google-play-download-badge-mono.svg): community-sourced artwork from [asvg](https://asvg.app/icons/google-play-download). The unchanged source is preserved at `internal/asset-sources/google-play-badge-mono.svg`. The website version, `static/public/creator/mobile/google-play-badge-mono.svg`, reverses the black-on-white colors and fits the viewBox to the existing badge background, matching the user's black-and-white reference and removing excess transparent padding. SVG does not need PNG compression.
- The previous [Google Play color PNG](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png) remains unchanged at `static/public/creator/mobile/google-play-badge.png` (646 × 250, 4,904 bytes). It is already an optimized indexed PNG; `pngquant --quality=95-100 --speed 1 --strip` increased its size to 5,535 bytes, so the smaller original was retained.

The App Store destination uses app ID `6810571721` from the supplied listing. The badge is temporarily disabled on both pages, with a not-allowed cursor and a localized "Coming soon" tooltip. The URL is retained in the source for re-enabling the link later. Its public availability has not been verified.
