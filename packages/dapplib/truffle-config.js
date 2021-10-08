require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space street renew night smile great light army gesture'; 
let testAccounts = [
"0x0b53515580236ce45439e88a20d633797c2c0faeb7d7d93adb40fb80ee1e5e5d",
"0x21c7b9ce3e93de07d786c2631f987324cbec794b8c16eef26af8d55ce3d2617c",
"0xb02802b6be660440d688780f73279fc945411285b4adab142ea4d392610e966e",
"0x2e22f23d9852dd66f69958391f614f70fe6fd4dec14eaf10b2738b210db1c4f4",
"0xb9bd83faae72eef74823de8692236fadbf32d1c0939c362025c619b569a49694",
"0x170bc1143a95b3ec1826292d33b69ce016801a37ca36c27430b37923663652fd",
"0x9d0e551071a46bc04bd5cb8e130f690c530c2548d0021bef1e96a2702579b440",
"0xb2bc17999a77faa1a7e1513096bdb4dea6766976adb10397449131ce534a18ac",
"0x64f52dfd43205581a4c7a14a9e1126bdd6db1bb203a7584adde52680fc0513ad",
"0xe97dae55bcb8fb6b620b8b8c812c4a1ed9c58dd8ea2e5c819d1caadcc57074fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

