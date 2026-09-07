# Capycoffee web

Static export of the Capycoffee Next.js shop (Ichiran-style ticket, rotating SKU **Freebird** from **Chiang Mai, Thailand**).

This repo’s `main` is the unzipped `out/` from `next build` (`output: 'export'`), plus `infra/` for S3/CloudFront.

## Product (this build)

- Named Kaffelogic **roast profiles**: Young Capy, Adult Capy, Grandpa Capy
- **Roast level**: continuous Light–Dark slider (1.0–5.0)
- **Whole beans only** (no grind)
- Optional tasting cup, bag size, quantity

## Pages

- `/` — Freebird hero and order ticket
- `/about/` — brand + origin
- `/roast/` — Kaffelogic bay and named profiles
- `/order/thanks/` — mock ticket confirmation

## Local

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/

## Release zip

GitHub Release tag `origin-static-out-20260908` attaches `out.zip` (index.html at archive root).

## AWS (intended)

Private S3 bucket + CloudFront OAC. Deploy `infra/s3-cloudfront.yaml` from a principal that can create the bucket and distribution. Do not deploy from this publish step.
