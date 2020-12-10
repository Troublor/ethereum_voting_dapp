var Voting = artifacts.require("./Voting.sol");
var ECRecovery = artifacts.require("./ECRecovery.sol");

const sigUtil = require("eth-sig-util")

var alice_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Alice"}])
var bob_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Bob"}])
var carol_vote_hash = sigUtil.typedSignatureHash([{ type: 'string', name: 'Message', value: "Vote for Carol"}])

var names = [
  web3.utils.asciiToHex("Alice"),
  web3.utils.asciiToHex("Bob"),
  web3.utils.asciiToHex("Carol"),
]

module.exports = function(deployer) {
  deployer.deploy(ECRecovery);
  deployer.link(ECRecovery, Voting);
  deployer.deploy(Voting, names, [alice_vote_hash, bob_vote_hash, carol_vote_hash]);
};
