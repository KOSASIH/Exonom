const BEP20Token = artifacts.require('Exonom')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(BEP20Token)
}
