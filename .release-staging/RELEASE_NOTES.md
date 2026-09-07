Static Next.js `out/` export for S3/CDN sync (Origin branch `cursor/roast-profile-whole-beans-4fbf`).

**SHA256** `6abea1b2cb87d4ab16ad2c873f5f7cff3155799b5083e0cf4cf65ebcd8a1cf7a`

**Extract layout:** `index.html` at archive root (contents of `out/`, not an `out/` wrapper):

```bash
mkdir -p site && tar -xzf capycoffee-out.tar.gz -C site
# → site/index.html, site/about/, site/roast/, site/_next/, …
```

**Mac Mini download:**

```bash
gh release download origin-static-out-20260908 \
  --repo thanakijwanavit/capycoffee-web \
  --pattern 'capycoffee-out.tar.gz'
```

**Product in this build:**
- Freebird origin: Chiang Mai, Thailand
- Roast profile cards (Young / Adult / Grandpa) + continuous Light–Dark roast-level slider
- Whole beans only (no grind)
