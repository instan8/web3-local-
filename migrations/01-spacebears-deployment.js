const Wallet= artifacts.require('wallet')
module.exports=function(deployer){
deployer.deploy(Wallet)
}