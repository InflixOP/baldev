const ethers=require("ethers")
const fs=require("fs-extra")

async function main() {
    const provider=new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet=new ethers.Wallet("0x39b104c513e84c7bb0dacb1daa92a4afca3ed2f3503595c2f62752853fda01fc",provider)
const abi=fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi","utf8")
const binary=fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")
const contractFactory= new ethers.ContractFactory(abi,binary,wallet)
console.log("Deploying , please wait")
const contract=await contractFactory.deploy();
console.log(contract);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
