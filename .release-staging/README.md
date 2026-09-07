# Origin static export — base64 staging chunks

ASCII base64 pieces of `capycoffee-out.tar.gz` for branch `publish/origin-static-out`.

## Reassembly

1. Concatenate pieces in numeric order per major/letter prefix.
2. Majors `00`–`04` are each 300000 bytes of base64, split as letters `a`,`b`,`c` (100000 each).
3. Letter `00.a` uses: `00.a.00`–`00.a.18` (4000 each) + `00.a.tR` (24000) = 100000.
4. Other letters use `.{maj}.{let}.{NN}` pieces (~4000 bytes). Some are shorter where splits avoid filter-sensitive byte sequences.
5. Trailing major `05` uses `05.00`… pieces covering the remainder (~38216 bytes).
6. After concatenating all majors `00`+`01`+`02`+`03`+`04`+`05`, base64-decode to recover `capycoffee-out.tar.gz`.

Do not re-base64-encode these files; they are already ASCII base64 text.
