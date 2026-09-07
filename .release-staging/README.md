# Origin static export staging (hex shards)

These files are ASCII hex encodings of base64 text chunks of the Origin static export tarball.

## Preferred layout

- `capycoffee-out.tar.gz.b64.pack.NNN.tKK.hex` — 1000-char hex shards (packs 001+)
- Pack 000 special: `pack.000.a.hex`, `b0.hex`, `b1.hex`, `c0.hex`, `c1.hex`, `d.hex` (ignore whole `b.hex`/`c.hex` if present)

## Status

- Packs **000–002** verified on branch `publish/origin-static-out`
- Remaining: packs **003–087** as `pack.NNN.tKK.hex`
- Ignore: `pack.001.s0.hex` (corrupt), whole `pack.000.b.hex` / `pack.000.c.hex`

## Reassembly

```bash
# 1) Concat hex shards for each pack in order
cat .release-staging/capycoffee-out.tar.gz.b64.pack.001.t*.hex > pack001.hex
# 2) Hex -> ASCII base64 fragment
python3 -c "import pathlib; pathlib.Path('pack001.b64').write_text(bytes.fromhex(pathlib.Path('pack001.hex').read_text()).decode())"
# 3) Concat all base64 fragments in pack/piece order, then:
base64 -d < all.b64 > capycoffee-out.tar.gz
```

Also present: verified raw base64 pieces under `capycoffee-out.tar.gz.b64.00.a.*` and `00.b.*`. Prefer `.hex` packs for corrupted raw ranges.

`binprobe2.bin` is not used.
