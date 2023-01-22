const Wallet =artifacts.require("wallet");

contract('wallet',(accounts)=>{
    it("hii", async ()=>{
const walletInstense = await Wallet
.deployed();
console.log(accounts)
await walletInstense.addMoney(7);
console.log(await walletInstense.amountCheck(accounts[0]));
    })
})