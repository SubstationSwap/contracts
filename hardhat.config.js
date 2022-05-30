require('@nomiclabs/hardhat-ethers');

const privateKey = "0x0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},
      dev: {
         url: 'http://127.0.0.1:8545',
         accounts: [privateKey],
         network_id: '31337',
         chainId: 31337,
      },
      lappsnet: {
         url: 'https://rpc.lappsnet.io/',
         accounts: [privateKey],
         network_id: '2780',
         chainId: 2780,
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
