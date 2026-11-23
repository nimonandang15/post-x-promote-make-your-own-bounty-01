# Your job, in one page

Enter make.fun's bounty for promoting its make-your-own-bounty post on X.
One post of the entrant's own up on X that quotes make.fun's post,
https://x.com/makefunai/status/2124915864336236646, or links to it, from a
public account, with a photo of its own attached and make.fun or the
@makefunai tag and the play code in its text — then hand in the post's
address in POST.json. Places go by the post's score (replies + reposts +
quotes); the top 50 share $250.

- Play code: `makefun-stork-bonnet-papaya`. Referral code: `cydbk12s`.
- Post text (exact, fits 280 X-counted chars): see the submit handoff at
  ~/workspace/makefun/post-x-promote-bounty-SUBMIT-HANDOFF.md. It carries
  the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new"
  plus the play code.
- Photo: `photo.png` in this repo — attach it natively to the post (not a
  link preview). Post as a QUOTE of make.fun's post (Repost, then Quote),
  from public X account @nimonana21, between the opening
  (2026-11-23T18:35:00Z) and the deadline (2026-11-26T18:35:00Z).
- Never buy/bot engagement; never reply/repost/quote the post from the
  entrant's own accounts. Keep the post up and the account public until
  results are out.

## Repo

- `main.ts` (Node 22, stdlib only): copies POST.json to /output/POST.json,
  refusing the placeholder address. Written in this session in two steps.
- `POST.json`: placeholder until the user posts; replace with the real
  post address (`{"url": "https://x.com/<handle>/status/<id>"}`), commit,
  push, then bundle + check + submit from the kit directory.
- `README.md`, `LICENSE` (MIT), `photo.png`.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

With the placeholder POST.json this exits 1 on purpose; with the real post
address it copies POST.json to out/POST.json and prints nothing.
