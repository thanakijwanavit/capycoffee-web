# Origin static export staging (base64 + hex)

Partial upload on branch `publish/origin-static-out`.

## Verified raw base64 (use as-is)
- `capycoffee-out.tar.gz.b64.00.a.00`–`.18`, `00.a.tR`
- `capycoffee-out.tar.gz.b64.00.b.00`–`.12`, `.14`–`.20`, `.22`
- Prefer `00.b.21.hex` over corrupt raw `00.b.21`
- Raw `00.b.13` and `00.b.23` are CORRUPT — reconstruct from pack 000 hex

## Hex encoding
ASCII hex of base64 text (`[0-9a-f]`). Decode:
```python
from pathlib import Path
Path('out.b64').write_bytes(bytes.fromhex(Path('file.hex').read_text()))
```

## Pack 000 (concat of 00.b.13 + 00.b.23 + 00.b.24 + 00.b.25)
Order: `pack.000.a.hex` + `b0` + `b1` + `c0` + `c1` + `d.hex`
(Ignore broken `pack.000.b.hex` / `pack.000.c.hex` if present.)

Split sizes: a/d = 8000 hex; b0/b1/c0/c1 = 4000 hex each.

## Upload protocol
Prefer ≤4000 hex chars per file via Github MCP; verify md5 after each upload.

## binprobe2.bin
Absent (nothing to delete).
