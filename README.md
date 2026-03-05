# wojakcoinjs-lib

*Wojakcoin (WJK).** A JavaScript library for [Wojakcoin](https://wojakcoin.cash). All defaults use Wojakcoin mainnet: addresses, payments, PSBTs, and scripts.

Fork of [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib). Released under [MIT](LICENSE).

## Networks

- **wojakcoin** – Wojakcoin mainnet (default everywhere; addresses start with `W`)
- **wojakcoinTestnet** – Wojakcoin testnet  
- **bitcoin**, **testnet**, **regtest** – Available for compatibility only

Params match [wojakcore](https://github.com/wojakcoin/wojakcore) `chainparams.cpp`: mainnet pubKeyHash `0x49`, scriptHash `0x05`, WIF `0xc9`.

## Install

```bash
npm install wojakcoinjs-lib
npm install ecpair bip32   # optional: keys and HD
```

## Usage

Default network is always Wojakcoin mainnet when omitted.

```javascript
const wjk = require('wojakcoinjs-lib');

// Addresses default to Wojakcoin
const script = wjk.address.toOutputScript('W...');

// Payments and PSBTs default to Wojakcoin
const { address } = wjk.payments.p2pkh({ pubkey: keyPair.publicKey });
const psbt = new wjk.Psbt();
```

With keys (ecpair + bip32):

```javascript
const wjk = require('wojakcoinjs-lib');
const { ECPairFactory } = require('ecpair');
const ecc = require('tiny-secp256k1');
const ECPair = ECPairFactory(ecc);

const keyPair = ECPair.makeRandom({ network: wjk.networks.wojakcoin });
const { address } = wjk.payments.p2pkh({
  pubkey: keyPair.publicKey,
  network: wjk.networks.wojakcoin,
});
```

## API

- **address** – encode/decode, output scripts (default: Wojakcoin)
- **payments** – P2PKH, P2SH, P2WPKH, P2WSH, P2TR (default: Wojakcoin)
- **networks** – `wojakcoin`, `wojakcoinTestnet`, plus `bitcoin`, `testnet`, `regtest`
- **Transaction**, **Psbt**, **script**, **crypto** – same as bitcoinjs-lib; PSBT default network is Wojakcoin

## Credits

- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) (MIT)
- [Wojakcoin](https://wojakcoin.cash)

## LICENSE

[MIT](LICENSE)
