var hello = artifacts.require("HelloWorld")

contract("HelloWorld", function () {
    it ("is_greet_works_well", async function () {
        const instance = await hello.deployed();
    })
})