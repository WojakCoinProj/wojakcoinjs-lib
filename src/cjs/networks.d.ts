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
export declare const wojakcoin: Network;
/**
 * Wojakcoin testnet.
 */
export declare const wojakcoinTestnet: Network;
/** Bitcoin mainnet (compatibility). */
export declare const bitcoin: Network;
/** Regtest (compatibility). */
export declare const regtest: Network;
/** Bitcoin testnet (compatibility). */
export declare const testnet: Network;
export {};
