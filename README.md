# Capycoffee web

Static marketing + bean-order demo for **Capycoffee** (Ichiran-style coffee, rotating SKU **Freebird**).

## Pages

- `index.html` — home
- `roasts.html` — Young Capy 1.0 / Adult Capy 3.0 / Grandpa Capy 5.0
- `about.html` — Kaffelogic Nano 7
- `order.html` — client-side ticket (`sessionStorage`)
- `404.html` — CloudFront custom error target

## Local

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/

## AWS (intended)

Private S3 bucket `capycoffee-demo-<accountid>` + CloudFront OAC. Deploy `infra/s3-cloudfront.yaml` from a principal that can `s3:CreateBucket` and `cloudfront:CreateDistribution` (the Cloud Agent user `cursor-cloud-partner-api` cannot).
