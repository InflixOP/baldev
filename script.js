// main.js

import { deployContract } from './deploy.js';

document.addEventListener("DOMContentLoaded", async () => {
    const deployButton = document.getElementById("deployContract");
    const deploymentStatus = document.getElementById("deploymentStatus");

    // Ethereum contract deployment
    deployButton.addEventListener("click", async () => {
        try {
            const transactionHash = await deployContract();
            console.log(transactionHash);
            deploymentStatus.textContent = "Contract deployed. Transaction Hash: " + transactionHash;
        } catch (error) {
            deploymentStatus.textContent = error.message;
        }
    });
});
