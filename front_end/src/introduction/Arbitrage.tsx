import './Template_for_arbitrage.css'

export const Arbitrage = () => {
    return (
        <div className="container">
            <h1 className="caption">Arbitrage</h1>
            <h2 className="title">Flash Loan</h2>
            <h3 className="subtitle">Origin</h3>
            <p className='content'>&emsp;&emsp;It was first introduced in 2018 by open-source bank marble, and now the most popular protocols offering this service are Aave, dYdX.</p>
            <h3 className='subtitle'>Principle</h3>
            <h1 className='content'>&emsp;&emsp;The flash loan is a Defi application, so it’s accomplished by some smart contract. In the CS(computer science) world, we usually process codes line by lines.
</h1>
            <h1 className='content'>&emsp;&emsp;However, in particular cases, we could define some parts of them to be “all or none,”it’s called atomic operation. That is, if some codes of this section fail, then the whole section should roll back. This is the basis of flash loans. We could make the codes representing loans, doing something(to do some arbitrage), and repayment in the same contract. Thus, the loan, arbitrage, and repayment should be all or none. And if we do some arbitrage and fail, the whole process rolls back like nothing happens.
</h1>
            <h3 className='subtitle'>Application</h3>
            <h3 className='subtitle'><br></br>&emsp;Arbitrage</h3>
            <p className='content_new'>&emsp;&emsp;In the Defi world, we could loan without any mortgage by using flash loans.
   That is, borrowers can mortgage merely without cose (but also need some gas fee ). And lenders can make profit without worrying borrowers breaking the contract, since the processes of loan and repayment are combined together.
</p>
            <h3 className='subtitle'>&emsp;Attack</h3>
            <p className='content_new'>There are some hackers who take advantage of flash loans to 
attack  other Defi projects to make profit. For example, since users can loan without a mortgage, they could manipulate some virtual currency price in a short period of time. By doing so, they could exploit some protocols with defective design, and make profit at low cost.
</p>    
            <h3 className='subtitle'>Conclusion</h3>
            <p className='content'>&emsp;&emsp;It’s evident that Flash Loans themselves are a very valuable tool in DeFi. They are currently prone to numerous attacks, but the tide is beginning to change. With in depth research into the issue, better security tools and uses of pricing oracles, the severity and frequency of these attacks is likely to diminish over time. 
 Also, flash loan is just a defi service. Those hack attacks could have been prevented, if the developers had found these loopholes in the beginning. Thus, we should not demonize it.
</p>
            <h2 className="title">How Defi Arbitrages with Different Pricing on DEX and CEX ?</h2>
            <p className='content'>&emsp;&emsp;What is arbitrage? Let's start with the definition. A trading platform is an organized market where any trader can participate and buy and sell assets according to the rules set by the market operator. In a centralized trading platform (CEX), the trading market is hosted on the operator's private equipment and is available only to authorized traders. Orders placed by traders on the CEX are sent to the operator via a direct connection and are processed behind the scenes. Traditional institutions such as the New York Stock Exchange (NYSE) or Nasdaq, as well as crypto institutions such as Coinbase or Binance, are forms of centralized trading platforms.</p>
            <p className="content">&emsp;&emsp;In contrast, a decentralized trading platform, or DEX, is a marketplace hosted on a public infrastructure (e.g., a public ethereum chain) that can be accessed by anyone with the right tools to access it. Unlike CEX, orders submitted on DEX are submitted to the respective blockchain they belong to, and transactions are executed using logic built into smart contracts deployed on that network. the Uniswap and 0x protocols are the two most used decentralized trading platforms at the time of this writing. Finally, arbitrage is the process of simultaneously buying and selling assets, usually in different markets, to profit from price differences.</p>
            <p className='content'>&emsp;&emsp;Let's say you walk into a yard sale and see a rare comic book for sale at a price well below the market price. You know your local comic book distributor would love to have it in their display case. You call them up and agree to sell it to the dealer at a specific price while buying it from a garage sale at a lower price so you can make a small profit. This is essentially how arbitrage works - you buy and sell assets in different markets and take advantage of the price differences.</p>
            <p className='content'>&emsp;&emsp;In the world of exchanges, arbitrage works very similarly, except that each market has multiple buyers and multiple sellers, and the trades in each market also exert upward or downward pressure on prices. In fact, it is the pressure from arbitrageurs that causes the market to gravitate toward the law of one price.</p>
            <p className='content'>&emsp;&emsp;There are quite a few types of bots that are profitable on the blockchain and can achieve layaway goals if the strategy is right. There are three main types of moving trading robots: Dex-Cex, Dex-Dex and Cex-Cex. The principle is to move bricks between different exchanges to achieve arbitrage, but to arbitrage on exchanges of different nature, different strategies need to be used.Compared to Dex-Dex and Cex-Cex, the threshold is lower, and the profits are less. However, if the strategy is right, the profit is still significant.</p>
            <p className='content'>&emsp;&emsp;Arbitrage Strategy: Listening block，and waiting for block updates。 Getting Dex and Cex buying and selling prices, and there handling fee. Then determine whether there is room for profit and then decide whether to execute the strategy.</p>
            <p className="content">&emsp;&emsp;Currently, arbitrage between DEX and CEX is only possible when the token is at a premium on CEX relative to DEX. In this case, users can buy spot on the DEX and sell short on the CEX at the same time, while the reverse is not possible as most tokens cannot currently be shorted on the DEX. This also leads to a continuous premium of DEX to CEX-listed margin tokens, while the arbitrage in the reverse case is possible using Beta Finance, as it allows short selling on DEX.</p>
            <p className='content'>&emsp;&emsp;When a profit margin is identified, a Dex trade is executed, followed by a Cex trade after a successful execution. When both steps are successful, you can execute a withdrawal. (Theoretically, they can be made to each other.) If the system determines that there is no room for arbitrage, it returns to the listening step, waits for a new quote, and continues the determination.
This arbitrage strategy between Dex and Cex requires depositing a certain amount of money in both Dex and Cex, and executing trades in the order of Dex first and Cex second when an arbitrage short sale is monitored. Sometimes it is necessary to open contracts for hedging to ensure that the principal is not lost. This strategy is suitable for some coins that are actively traded on Dex, otherwise it is difficult to arbitrage if there is no depth of trading on Dex.
</p>    
            <p className='content'>&emsp;&emsp;Technical features: This strategy uses a low configuration requirement, only free Infura nodes are needed to complete the listening and grabbing on the chain data, and the network requirement from the server to the centralized exchange is also very low, the cheapest foreign server can do the job well.</p>
            <p className='content'>&emsp;&emsp;This strategy will not be affected by robots running in the Dex-Dex arbitrage and does not pursue low latency servers in the Cex-Cex arbitrage, which is currently a cost-effective robot strategy that you can try.</p>
        </div>
    );
};