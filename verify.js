import { ethers } from "./ems.js";
document.addEventListener("DOMContentLoaded", () => {
    const verifyButton = document.getElementById("verifyButton");
    const certificateHashInput = document.getElementById("certificateHash");
    const verificationResult = document.getElementById("verificationResult");
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const senderContractAddress = "0x1F71af5D24068d66A9cB0024e87686B3b9cA924A";
    const senderContractAbi=[{"inputs":[{"internalType":"bytes32","name":"certificateHash","type":"bytes32"}],"name":"addCertificate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"certificateHash","type":"bytes32"}],"name":"certificateExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
    const wallet = new ethers.Wallet("0x9c78c7e02621bb0b0bfee920f0ffdca6d6636c161bedc9b4308ff5e517838bd7", provider);

    verifyButton.addEventListener("click", async () => {
        const certificateHash = certificateHashInput.value;

        try {
            // Create an instance of the sender's contract
            const senderContract = new ethers.Contract(senderContractAddress, senderContractAbi, wallet);

            // Call the sender's function to check certificate existence
            const exists = await senderContract.certificateExists(certificateHash);

            if (exists) {
                verificationResult.textContent = "Certificate exists on the blockchain.";
            } else {
                verificationResult.textContent = "Certificate does not exist on the blockchain.";
            }
        } catch (error) {
            console.error("Error verifying certificate:", error.message);
            verificationResult.textContent = "Error: " + error.message;
        }
    });
});
