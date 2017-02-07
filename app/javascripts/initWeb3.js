import {default as Web3} from 'web3';

var initWeb3 = function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. " +
            "If using MetaMask, see the following link. Feel free to delete this warning. :) " +
            "http://truffleframework.com/tutorials/truffle-and-metamask");
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Falling back to http://localhost:8545. " +
            "You should remove this fallback when you deploy live, " +
            "as it's inherently insecure. " +
            "Consider switching to Metamask for development. " +
            "More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
}

export default initWeb3;