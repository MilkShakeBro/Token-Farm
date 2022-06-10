import './Template.css'
import IMG1 from './1.jpg'
import IMG2 from './2.jpg'
import IMG3 from './3.jpg'
import IMG4 from './4.jpg'
import IMG5 from './5.jpg'
import IMG6 from './6.jpg'

export const Tutorial = () => {
    return (
        <div className="container">
            <h1 className="caption">Tutorial</h1>
            
            <div>
                <p className='title'>1. How to download virtual wallet?</p>
                <p className='content'>
                    There are already many moving parts to understand in the crypto industry, but setting up a wallet is arguably one of the more essential aspects. In this part our goal is to ensure that you can set up your own crypto wallet!<br></br>
                    <br></br>
                    Here’s a rundown on setting up a self-custody mobile wallet:
                    &emsp;&emsp;a. Choose a wallet app such as Coinbase Wallet, Mycelium, or Metamask.<br></br>
                    &emsp;&emsp;b. Create an account and record your recovery phrase.<br></br>
                    &emsp;&emsp;c. Some wallet apps may allow you to add an extra layer of security, like facial recognition or a passcode.<br></br>
                    &emsp;&emsp;d. Begin sending, receiving, or trading crypto.<br></br>
                    <br></br>
                    Unfortunately, you can’t press “forgot password?” with a wallet like this if you lose access. Your only chance of getting control is by entering your private key, the string of 12 random words generated for you when you signed up for the wallet. Please remember your password and private key!
                    <br></br>
                </p>

                <p className='title'>2. How to get ETH on Kovan network? </p>
                <p className='content'>
                    First, get the MetaMask extension for Chrome here if you don’t have it yet. There are several ways to get test ETH on the Kovan test network, however the most stable is currently the “Gitter Method”.<br></br>
                    <br></br>
                    Use your Github or Twitter account to sign in at <a href="https://gitter.im/kovan-testnet/faucet">kovan-testnet</a><br></br>
                    Copy your Kovan ETH address by clicking on your MetaMask Chrome icon.<br></br>
                    <img src={IMG1} alt="1.jpg" className='center'></img><br></br>
                    Once you’re in the chat, post your Kovan ETH address into the chat and the bot will automatically assign you 5 Kovan ETH.<br></br>
                    <img src={IMG2} alt="2.jpg" className='center'></img><br></br>
                    <br></br>

                </p>

                <p className='title'>3. How to swap ETH to USDC, DAI, WETH, and FAU?</p>
                <p className='content'>
                    The easist way to swap different cryptocurrency is throught the crypto exchange center. Of course it may need a little gas fee, but it can save your time and ensure the security of  the transaction. <br></br>
                    <br></br>
                    There are many crypto exchange center. Comsumers can choose it based on their need. Here is the simple tutorial to the biggest crypto exchange center, BIANACE.<br></br>

                    &emsp;&emsp;1. Log in to your Binance account and click Trade - Swap Farming.<br></br>
                    <img src={IMG3} alt="3.jpg" className='center'></img><br></br>
                    &emsp;&emsp;2. Choose the token you want to swap and enter the amount. Confirm the token and the amount. The system will display the market price and automatically calculate the slippage and fee. Click Swap to proceed.<br></br>
                    <img src={IMG4} alt="4.jpg" className='center'></img><br></br>
                </p>

                <p className='title'>4. How to import different tokens from the metamask wallet?</p>
                <p className='content'>
                    This part will cover how to add different tokens into your MetaMask wallet through a simple, step-by-step process. Though MetaMask is the bridge to decentralized applications, you are going to need a vehicle to cross that bridge. Ethereum and other ERC20 tokens will be the fuel that MetaMask uses to launch you into the world of decentralization.<br></br>
                    <br></br>
                    ERC20 tokens are the standard protocol for smart contracts on Ethereum. You may recognize many of these like Uniswap, VeChain, Chainlink, and several others. This guide will show you how to add them to your Assets tab to purchase them later.<br></br>
                    <br></br>
                    To add tokens to your MetaMask, go to the main MetaMask account page. Click on the assets tab, where you will see Add Token at the bottom.<br></br>
                    <img src={IMG5} alt="5.jpg" className='center'></img><br></br>
                    After you click Add Token, you can search for the type of token you want to add. Type it in the search engine like you would any other word on a search engine.
                    Once you search, you can click on your chosen token and add it by hitting next and adding tokens. You can search and add multiple tokens at once.<br></br>
                    <img src={IMG6} alt="6.jpg" className='center'></img><br></br>
                    After this, you will be able to view your tokens on the Assets tab and you have already imported token on your metamask wallet!<br></br>
                </p>

                {/* <p className='title'>5. Why it is necessary to do multi-hop  when swap ETH to WETH?</p>
                <p className='content'>

                </p> */}
            </div>
        </div>
    );
};

