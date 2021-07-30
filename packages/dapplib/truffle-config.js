require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember artwork good nasty future slice'; 
let testAccounts = [
"0x3c17340b9706933f5265f47dd2f0568241f5b50b852c476383e226bb84fc8d76",
"0x4435349b9dd29743599ae4a0aa144a0faf89714d510689349497787ef50ad537",
"0x2255d019b2cd30742624a7124af44bfd500fa99ad316bd7b5c4c135bb6a0f420",
"0x44c48265b35a4202bc7913b52e958bee20e262cf1d4e0d4cd89634d4822f59aa",
"0xf4575812d537393cd73ebe338d47b2bbbcb9f88953f16eef5b821d9c7caeeaad",
"0x4cdd22fe5e4948c43fea3a977bd626c2731355aed577a307fddd6ea4e84959d3",
"0xbccd81cba50d2a728a9194931fa4971157f60208af54772667605352de0b4abc",
"0x18d5ed11dec4d666c237bc697b3c566199355e15cf6325c8397a1a67a457bf8c",
"0x4c30b6ecc7a1abe3f742ce85e9dd521b9e6106dd30c7d84a4d20c47935be0cd0",
"0xcebadd3730e3683f59249d7109c235dbcfba384273386825746aca9a138d4406"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

