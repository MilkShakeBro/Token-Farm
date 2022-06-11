import './Template.css'

export const Contract = () => {
    return (
        <div className="container">

            <h1 className="caption">Whitepaper</h1>

            <div>
                <p className="title">Features</p>

                <p className="content">
                    1.Staking tokens&emsp;
                    2.Unstaking tokens&emsp;
                    3.Rewarded some “DAPP” tokens&emsp;
                </p>

                <p className="title">Functionality</p>
                <p className="subtitle">Stake tokens</p>
                <p className="content">
                    
                1. What token can they stake?<br></br>
                &emsp;&emsp;<strong>Function name: </strong>tokenIsAllowed(address token) public view returns (bool)<br></br>
                &emsp;&emsp;<strong>Method: </strong>check if the token address to be staked match the allowedTokens public address array<br></br>

                2. How many can they stake?<br></br>
                &emsp;&emsp;<strong>Function name: </strong>require(_amount &gt; 0. “Amount must be more than 0”)<br></br>
                &emsp;&emsp;<strong>Method: </strong>They can stake as many as possible if they have money greater than 0.<br></br>

                3. Call the transfer function<br></br>
                &emsp;&emsp;<strong>Function name: </strong>IERC20(_token). transferFrom(msg.sender, address(this), _amount)<br></br>
                &emsp;&emsp;<strong>Method: </strong>Since the TokenFarm contract doesn’t own the ERC-20 token, we need to use the transferFrom function. If we want to call transferFrom function, we need the abi of the ERC-20 token for executing it. Thus, we can user IERC20() function first to get the abi and then call transferFrom to transfer the given amount of token.<br></br>
                
                4. Track how many tokens the address sent us<br></br>
                &emsp;&emsp;<strong>Variable name: </strong>mapping(address -&gt; mapping(address -&gt; uint256)) public stakingBalance<br></br>
                &emsp;&emsp;<strong>Method: </strong>Get to know the address that transfers token transfers what kind of token and how many tokens it transfers.<br></br>

                </p>

                <p className="subtitle">Unstake tokens</p>
                <p className="content">

                &emsp;&emsp;<strong>Function name: </strong>unstakeTokens(address _token), IERC20(_token). transfer(msg.sender, balance)<br></br>
                &emsp;&emsp;<strong>Method: </strong>Transfer the money back to the stakers.

                </p>

                <p className="subtitle">Issue DAPP tokens</p>
                <p className="content">

                1. Rules<br></br>
                &emsp;&emsp;-&gt; 1:1 for every 1 ETH<br></br>
                &emsp;&emsp;-&gt; 1:1 for every 1 DAI<br></br>

                2. Issue tokens to all stakers<br></br>
                &emsp;&emsp;<strong>Variable name: </strong>address[] public stakers<br></br>
                &emsp;&emsp;<strong>Function name: </strong>issueTokens() public onlyOwner, getUserTotalValue(address user) public view returns (uint256)<br></br>
                &emsp;&emsp;<strong>Method: </strong>Issuing the reward by calculating total value.<br></br>

                3. Caculate total reward value &amp; send the reward tokens<br></br>
                &emsp;&emsp;<strong>Variable name: </strong>mapping(address -&gt; uint256) public uniqueTokensStaked, address recipient, userTotalValue, mapping(address -&gt; address) public tokenPriceFeedMapping<br></br>
                &emsp;&emsp;<strong>Function name: </strong>getUserTotalValue(address user) public view returns (uint256), getUserTokenStakingBalance EthValue (address user, address token) public view returns (uint256), getTokenEthPrice(address token) public view returns (uint256, uint8), constructor(address _dappTokenAddress), dappToken.transfer(recipient), getUserTotalValue(address _recipient) public view returns (uint256), getUserSingleTokenValue(address _user, address _token) public view returns (uint256), getTokenValue(address _token) public view returns (uint256), setPriceFeedContract(address _token, address _priceFeed) public onlyOwner, AggregatorV3Interface (priceFeedAddress). latestRoundData(),<br></br>
                &emsp;&emsp;<strong>Method: </strong>Constructor here is to specify the dapp token address and store this token as global variable. Send the token use transfer function since now TokenFarm owns the token to be transferred. To get the total amount of token value, we use getUserTotalValue to get it. When we loop through all the possible tokens to be calculated, we need to calculate the total value of each single token that staker stakes. Thus, we create getUserSingleTokenValue function. Futhermore, to get the price of each token, we create getTokenValue function. To get the price feed, we need to create another function called setPriceFeedContract. Inside the setPriceFeedContract, we need the chainlink aggregator to get the latest round data. In this case, we import the chainlink package to get the AggregatorV3Interface, feed in the priceFeedAddress, and call the latestRoundData function to get the price. After doing all the above, the next thing we have to do is to call the decimals to get the number of decimals. This way we can calculate the current value from the price feed with the amount the stakers stake. Last, we can get the single token value and then continue to calculate the next token if the user stakes it.<br></br>
                </p>
            </div>
        </div>
    );
};