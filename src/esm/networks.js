/**
 * Wojakcoin (WJK) mainnet. Default network for this library. Addresses start with 'W'.
 * From wojakcore chainparams.cpp
 */
export const wojakcoin = {
  messagePrefix: '\x1aWojakCoin Signed Message:\n',
  bech32: 'wjk',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x49,
  scriptHash: 0x05,
  wif: 0xc9,
};
/**
 * Wojakcoin testnet.
 */
export const wojakcoinTestnet = {
  messagePrefix: '\x1aWojakCoin Signed Message:\n',
  bech32: 'twjk',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
/** Bitcoin mainnet (compatibility). */
export const bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};
/** Regtest (compatibility). */
export const regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
/** Bitcoin testnet (compatibility). */
export const testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
