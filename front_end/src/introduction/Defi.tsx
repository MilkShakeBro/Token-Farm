import './Template.css'

import './Template.css'

export const Defi = () => {
    return (
        <div className="container">

            <h1 className="caption">DeFi</h1>
            
            <div>
                <p className='title'>Main Point</p>
                <p className="content">
                    1.Introduction of DeFi&emsp;
                    2.DeFi Services&emsp;
                    3.The DeFi stack&emsp;
                    4.Risk&emsp;
                    5.TVL&emsp;
                    6.Collateralized loans in DeFi&emsp;
                </p>

                <p className='subtitle'>1.Introduction of DeFi</p>
                <p className='content'>
                    1.Financial infrastructure as an open, permissionless, and highly interoperable protocol stack built on public smart contract platforms<br></br>
                    2.<strong>Determine whether it is DeFi</strong><br></br>
                    &emsp;&emsp;a.Are the financial assets controlled by the user(non-custodial) ： yes<br></br>
                    &emsp;&emsp;b.Can someone single-handedly sensor a transaction execution ：no<br></br>
                    &emsp;&emsp;c.Can someone single-handedly sensor the protocol execution  : no<br></br>
                    3.<strong>DeFi advantages</strong><br></br>
                    &emsp;&emsp;a.Efficiency<br></br>
                    &emsp;&emsp;Removing rent-seeking intermediaries<br></br>
                    &emsp;&emsp;b.Open finance and universal accessibility<br></br>
                    &emsp;&emsp;Inclusive<br></br>
                    &emsp;&emsp;c.Transparency and public verifiability<br></br>
                    &emsp;&emsp;Anyone can inspect the smart contract code and verify the execution and state of the system<br></br>
                    &emsp;&emsp;d.Self custody and censorship resistant<br></br>
                    &emsp;&emsp;e.Automation & programmability<br></br>
                    &emsp;&emsp;f.Composability and interoperability<br></br>
                    &emsp;&emsp;g.Innovation<br></br>
                    &emsp;&emsp;DeFi applications often are much simpler and faster to develop than CeFi counterparts：E.g., Uniswap vs. CEX<br></br>
                    &emsp;&emsp;Atomic composability：E.g, Flash loan<br></br>
                    <br></br>

                </p>

                <p className='subtitle'>2.DeFi Services</p>
                <p className='content'>
                    1.<strong>Asset tokenization</strong><br></br>
                    The process of getting new assets on the chain, a blockchain representation of assets that makes them easier to access, transfer and programmable<br></br>
                    &emsp;&emsp;a.Tokenization: process of adding new assets to a blockchain<br></br>
                    &emsp;&emsp;b.Token: the blockchain representation of the asset<br></br>
                    &emsp;&emsp;c.Make assets more accessible, easy to transfer, programmable<br></br>
                    &emsp;&emsp;d.Different type of tokens :Governance token, security tokens (tokenized real estate), Non- fungible token (NFT), StableCoin<br></br>
                    2.<strong>Decentralized exchange (DEX)</strong><br></br>
                    &emsp;&emsp;a.A decentralized exchange (better known as a DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders.<br></br>
                    &emsp;&emsp;b.DEXs fulfill one of crypto’s core possibilities: fostering financial transactions that aren’t officiated by banks, brokers, payment processors, or any other kind of intermediary.<br></br>
                    &emsp;&emsp;c.Decentralized exchanges are simply a set of smart contracts. They establish the prices of various cryptocurrencies against each algorithmically and use “liquidity pools” — in which investors lock funds in exchange for interest-like rewards — to facilitate trades.<br></br>
                    &emsp;&emsp;d.Non-custodia<br></br>
                    &emsp;&emsp;e.Transparency<br></br>
                    &emsp;&emsp;f.E.g：UniSwap, Curve<br></br>
                    3.<strong>Decentralized Lending</strong><br></br>
                    &emsp;&emsp;a.Collateralized loans in DeFi<br></br>
                    &emsp;&emsp;b.Over collateralization; not based on credit<br></br>
                    &emsp;&emsp;c.Collateralized debt positions: creating new tokens using collateral<br></br>
                    &emsp;&emsp;E.g, MakerDAO<br></br>
                    &emsp;&emsp;d.Collateralized debt markets:<br></br>
                    &emsp;&emsp;Pooled collateralized debt markets: E.g, Compound, Aave<br></br>
                    &emsp;&emsp;P2P collateralized debt markets<br></br>
                    4.<strong>other DeFi building blocks and services</strong><br></br>
                    &emsp;&emsp;a.Decentralized derivatives<br></br>
                    &emsp;&emsp;Asset-based derivatives: E.g, Synthetix, Mirror<br></br>
                    &emsp;&emsp;Event-based derivatives: E.g, Augur<br></br>
                    &emsp;&emsp;b.On-chain asset management<br></br>
                    &emsp;&emsp;Non-custodial, different from traditional asset management<br></br>
                    &emsp;&emsp;Semi-automatic rebalancing of portfolio, trend trading<br></br>
                    &emsp;&emsp;E.g, Yearn, Set protocol<br></br>
                    &emsp;&emsp;c.Decentralized insurance<br></br>
                    <br></br>

                </p>

                <p className='subtitle'>3.The DeFi Stack</p>
                <p className='content'>
                    1.<strong>Units of value</strong><br></br>
                    &emsp;&emsp;First is the money, DAI, ETH, money market tokens (cTokens and aTokens), centrally hosted ERC-20, anchor assets and stablecoins (USDT, USDC, WBTC, renBTC, tBTC), LP tokens of the AMM pool, which are mainly used as collateral for derivatives, lending and leverage for the DeFi protocol, also represent the beginning and end of a full transaction lifecycle.<br></br>
                    2.<strong>Transaction layer</strong><br></br>
                    &emsp;&emsp;Atomic units of value alone are not enough.DeFi users, whether human or bot, must be able to transact on the chain, which is layer 2 of the DeFi stack.<br></br>
                    &emsp;&emsp;As DeFi protocols have evolved, they have become part of the increasingly complex DeFi system. Protocols no longer require only key:value queries (e.g. to find public addresses and return the number of tokens held). Modern DeFi protocols rely on external transactions to run smoothly, including tracking and storing collateral balances, measuring collateral ratios, handling propeller prices, performing clearing, allocating collateral rewards, issuing margin and leverage, etc. These operations consume a large amount of Gas and therefore require sufficient capacity in Layer 1 or Layer 2. Therefore, we have identified "trading capacity" as a core element in the DeFi Stack.<br></br>
                    3.<strong>Oracles</strong><br></br>
                    &emsp;&emsp;The Price oracles is the next indispensable root of the infrastructure. The security of market data and the verifiability of inputs are critical to the functionality of the DeFi protocol. The siloed design of smart contracts based on off-chain data means that a centralized prophecy machine can introduce a single point of failure for the entire system.<br></br>
                    &emsp;&emsp;The prophecy machine can trigger higher-order modular events, such as liquidation. The centralized Coinbase and decentralized MakerDAO medianizer, Chainlink, Band, Tellor, UMA, API3, Compound Open Oracle and Nest are nine of the largest and most popular oracles today.<br></br>
                    4.<strong>DeFi primitives</strong><br></br>
                    &emsp;&emsp;a.Lending protocols: Compound，Aave，Cream，bZx，Yield，Notional，Mainframe<br></br>
                    &emsp;&emsp;b.AMM pools：Curve，Uniswap，Balancer，Bancor，mStable，BlackHoleSwap，DODO，Serum Swap<br></br>
                    &emsp;&emsp;c.Orderbook exchanges: 0x，IDEX，Loopring，DeversiFi，Serum<br></br>
                    &emsp;&emsp;d.Derivative networks: MCDEX，Perpetual Protocol，DerivaDEX，Potopn，Opyn，Synthetix，dYdX，Pods，Primitive，BarnBridge<br></br>
                    &emsp;&emsp;e.Asset management: Set，Melon，dHEDGE<br></br>
                    5.<strong>Aggregators</strong><br></br>
                    &emsp;&emsp;This layer consists of supply-side and demand-side aggregators<br></br>
                    &emsp;&emsp;Layer 5 protocol aggregators do not host collateral assets. They typically provide smart contract constructs that enable users to interact with other Ether DeFi protocols.<br></br>
                    &emsp;&emsp;a.Supply-side aggregators: Yearn Finance，RAY，Idle Finance，APY.Finance，Harvest Finance，Rari Capital<br></br>
                    &emsp;&emsp;b.Demand-side aggregators: 1inch，DEX.ag，Matcha，Paraswap<br></br>
                    &emsp;&emsp;c.Aggregator of aggregators: yAxis<br></br>
                    &emsp;&emsp;d.Novel aggregators: Swivel Finance，Benchmark<br></br>
                    6.<strong>Wallets and front ends</strong><br></br>
                    &emsp;&emsp;Wallet and front end at the top of all DeFi<br></br>
                    &emsp;&emsp;The presence of DeFi wallets, relayers and front ends enhances the DeFi user experience. They do not compete on financial or technical constructs, but on design, customer support, ease of use, localization, etc. Their primary business is user acquisition.<br></br>
                    &emsp;&emsp;We segment these companies by function. For example, Relay provides a front-end for a specific protocol (E.g, Guesser is a front-end for Augur, while Tokenlon is a 0x-based decentralized exchange.) Front-ends like Instadapp and Zapper simplify the process of writing smart contract calls across different DeFi underpinning products.<br></br>
                    &emsp;&emsp;a.Relayers: Tokenlon，Dharma，PoolTogether，Guesser<br></br>
                    &emsp;&emsp;b.Wallets:Coin98，MetaMask，Math，imToken，Bitpie，Exodus，Trust Wallet<br></br>
                    &emsp;&emsp;c.DeFi-native front ends:DeFi Saver，Zerion，Zapper，Argent，Instadapp<br></br>
                    <br></br>

                </p>

                <p className='subtitle'>4.Risk</p>
                <p className='content'>
                    DeFi security appear at all layers<br></br>
                    1.<strong>Network attacks </strong>：Eclipse/Dos attacks<br></br>
                    2.<strong>Consensus attacks</strong> : 51%attacks/double-spending/selfish mining<br></br>
                    3.<strong>Smart contract code bugs</strong>:reentracy/quthorization/etc<br></br>
                    4.<strong>DeFi protocol composability attacks</strong><br></br>
                    5.<strong>Excessive arbitrage between pools,flash loans</strong><br></br>
                    6.<strong>Oracle attacks</strong><br></br>
                    7.<strong>Bridge attacks</strong><br></br>
                    8.<strong>Covernance attacks</strong><br></br>
                    <br></br>

                </p>

                <p className='subtitle'>5.TVL</p>
                <p className='content'>
                    Total value locked: The total value held by the DeFi platform in its smart contracts. Represents the sum of all funds that exist on the platform in lending and trading capacity. The industry-wide TVL is the sum of the TVL held by all individual DeFi referencing programs.<br></br>
                    1.<strong>Decentralized exchange (DEX)</strong><br></br>
                    &emsp;&emsp;TVL refers to the total value of all coin pairs held in the protocol's pool.<br></br>
                    2.<strong>Decentralized Lending</strong><br></br>
                    &emsp;&emsp;TVL is the total value of the holdings in the lending pool.<br></br>
                    3.<strong>Yield farming</strong><br></br>
                    &emsp;&emsp;TVL is the value that users lend to the application for revenue optimization.<br></br>
                    <br></br>

                </p>

                <p className='subtitle'>6.Collateralized loans in DeFi</p>
                <p className='content'>
                    Over collateralization：Require traders to over collateralize，because there is no need to know the trader's credit.<br></br>
                    1.<strong>Collateralized debt positions</strong>: creating new tokens using collateral.<br></br>
                    &emsp;&emsp;E.g：MakerDAO：if 1 ETH= 4000DAI， Traders can collateralize 1 ETH, lending (casting out) 2000DAI.<br></br>
                    2.<strong>collateralized debt markets</strong>：Lending an already existing token<br></br>
                    &emsp;&emsp;E.g：Compound：if 1 ETH=4000 USDC，Traders can collateralize 8000 USDC, lending (casting out) 1 ETH.<br></br>
                </p>
            </div>
        </div>
    );
};