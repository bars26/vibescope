# VibeScope
Independent read-only vibe/vibe testnet token inspector. Built by bars26.

## Features
Address/official token URL input; live V6 API reads with legacy fallback; launch stage, transfer state and reserve target; creator tax routing; fee-only round-trip model; API freshness and source provenance. No wallet, signing, keys or trading.

## Run
`python build.py` generates a Cloudflare Worker at `dist/server/index.js`. The worker serves the UI and a bounded GET-only proxy. Only fixed vibe/vibe API endpoints and validated 20-byte token addresses are accepted.

## Method
V6 platform receives 20% of collected tax. Creator weights split the remaining 80%. The cost model uses amount / (1 + tax rate) * (1 - tax rate), excluding gas, curve impact, slippage, pool fees, opening tax and paired token tax. It is a hypothetical static-price scenario, not an executable quote. Non-native reserve decimals are not assumed. Legacy fields without a supported schema stay unavailable.

## Sources / limits
https://testnet.vibevibe.fun/docs/protocol
https://testnet.vibevibe.fun/docs/#programs/eligibility
App API endpoints are public but not a guaranteed stable third-party API. Schema changes can break reads. Source-reported data is not independent contract verification. Test assets have no monetary value. No claim of affiliation or reward eligibility.

## Build
No dependencies. `python build.py`.

## Vercel
The `public/` directory serves the UI. `api/token/[address].js` adapts the same read-only worker to a Vercel Node function. No secrets or environment variables are required. Keep public files in sync with root UI source when editing.
