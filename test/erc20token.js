var erc20Token = artifacts.require('./erc20Token.sol');

contract('erc20Token', async accounts => {
  it("should assert true", async() => {
    await erc20Token.deployed();
    assert.isTrue(true);

  });
});
