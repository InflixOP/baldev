import { ethers } from "./ems.js";
document.addEventListener("DOMContentLoaded", async () => {
  const deployButton = document.getElementById("deployContract");
  const deploymentStatus = document.getElementById("deploymentStatus"); 
  // Ethereum contract deployment
  deployButton.addEventListener("click", async () => {
      try {
          const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
          await provider.ready;
          const wallet = new ethers.Wallet("0x9c78c7e02621bb0b0bfee920f0ffdca6d6636c161bedc9b4308ff5e517838bd7", provider);

          // Replace with your contract ABI and binary
          const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"verifier","type":"address"},{"indexed":false,"internalType":"bytes32","name":"certificateHash","type":"bytes32"}],"name":"CertificateVerified","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"certificateExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"certificateHash","type":"bytes32"}],"name":"verifyCertificate","outputs":[],"stateMutability":"nonpayable","type":"function"}]
                const binary="608060405234801561001057600080fd5b506102fe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063850c17681461003b578063b440983e14610057575b600080fd5b610055600480360381019061005091906101be565b610087565b005b610071600480360381019061006c91906101be565b610163565b60405161007e9190610206565b60405180910390f35b60008082815260200190815260200160002060009054906101000a900460ff16156100e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100de9061027e565b60405180910390fd5b600160008083815260200190815260200160002060006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f3750325e86dccb1214e43959e384dc8a25aa48df1569ed2f6d874a2b068516778260405161015891906102ad565b60405180910390a250565b60006020528060005260406000206000915054906101000a900460ff1681565b600080fd5b6000819050919050565b61019b81610188565b81146101a657600080fd5b50565b6000813590506101b881610192565b92915050565b6000602082840312156101d4576101d3610183565b5b60006101e2848285016101a9565b91505092915050565b60008115159050919050565b610200816101eb565b82525050565b600060208201905061021b60008301846101f7565b92915050565b600082825260208201905092915050565b7f436572746966696361746520616c726561647920766572696669656400000000600082015250565b6000610268601c83610221565b915061027382610232565b602082019050919050565b600060208201905081810360008301526102978161025b565b9050919050565b6102a781610188565b82525050565b60006020820190506102c2600083018461029e565b9291505056fea2646970667358221220598c2ed510b65707489d77183af4fff57f40eaa6eb371ea8584f51f5eee13da764736f6c63430008120033"

          const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
          const contract = await contractFactory.deploy();
          await contract.deployTransaction.wait(1);
          console.log(contract.deployTransaction.hash)
          deploymentStatus.textContent = "Contract deployed. Transaction Hash: " + contract.deployTransaction.hash;
      } catch (error) {
          deploymentStatus.textContent = "Contract deployment error: " + error.message;
      }
  });

  });
