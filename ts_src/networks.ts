/**
 * Network configurations for Wojakcoin (WJK) and compatibility networks.
 * This library is for Wojakcoin; all defaults use Wojakcoin mainnet.
 * Message prefixes, Bech32, BIP32, and address prefixes follow chainparams.
 *
 * Primary: wojakcoin, wojakcoinTestnet.
 * Also exported for compatibility: bitcoin, testnet, regtest.
 *
 * @packageDocumentation
 */
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

/**
 * Wojakcoin (WJK) mainnet. Default network for this library. Addresses start with 'W'.
 * From wojakcore chainparams.cpp
 */
export const wojakcoin: Network = {
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
export const wojakcoinTestnet: Network = {
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
export const bitcoin: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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
