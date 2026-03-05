# wojakcoinjs-lib

A JavaScript library for [Wojakcoin (WJK)](https://wojakcoin.cash). Fork of [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) with Wojakcoin network support.

Released under the terms of the [MIT LICENSE](LICENSE).

## Networks

- **wojakcoin** – Wojakcoin mainnet (addresses start with `W`, default when no network is passed)
- **wojakcoinTestnet** – Wojakcoin testnet
- **bitcoin**, **testnet**, **regtest** – Original Bitcoin networks (still available)

Network parameters match [wojakcore](https://github.com/wojakcoin/wojakcore) `chainparams.cpp`:
- Mainnet: pubKeyHash `0x49`, scriptHash `0x05`, WIF `0xc9`
- BIP32: same as Bitcoin (`0x0488b21e` / `0x0488ade4`)

## Installation

```bash
npm install wojakcoinjs-lib
# optionally, for key derivation and signing
npm install ecpair bip32
```

## Usage

```javascript
const wojakcoin = require('wojakcoinjs-lib');
// or: import * as wojakcoin from 'wojakcoinjs-lib';

const { address, payments, networks } = wojakcoin;

// Default network is Wojakcoin mainnet for address module
const script = address.toOutputScript('W...'); // decodes and uses Wojakcoin mainnet
```

With ECPair and BIP32 (install `ecpair` and `bip32`):

```javascript
const wojakcoin = require('wojakcoinjs-lib');
const { ECPairFactory } = require('ecpair');
const ecc = require('tiny-secp256k1');
const ECPair = ECPairFactory(ecc);

const keyPair = ECPair.makeRandom({ network: wojakcoin.networks.wojakcoin });
const { address } = wojakcoin.payments.p2pkh({
  pubkey: keyPair.publicKey,
  network: wojakcoin.networks.wojakcoin,
});
```

## API

Same as bitcoinjs-lib. Export includes:

- `address` – address encoding/decoding, output scripts
- `payments` – P2PKH, P2SH, P2WPKH, P2WSH, P2TR, etc.
- `networks` – `wojakcoin`, `wojakcoinTestnet`, `bitcoin`, `testnet`, `regtest`
- `Transaction`, `Psbt`, `script`, `crypto`, etc.

When a function accepts an optional `network` and none is passed, **Wojakcoin mainnet** is used (unlike bitcoinjs-lib which defaults to Bitcoin).

## Credits

- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) – original library (MIT)
- [Wojakcoin](https://wojakcoin.cash) – community and chain params

## LICENSE

[MIT](LICENSE)
