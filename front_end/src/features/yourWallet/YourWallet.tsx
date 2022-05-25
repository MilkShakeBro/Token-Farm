import React, { useState } from "react"
import { useEthers } from "@usedapp/core"
import { StakeForm } from "./StakeForm"
import { Tab, makeStyles, Box } from "@material-ui/core"
import { TabContext, TabList, TabPanel } from "@material-ui/lab"
import {
  ConnectionRequiredMsg
} from "../../components"
import { Token } from "../Main"
import { WalletBalance } from "./WalletBalance"

interface YourWalletProps {
  supportedTokens: Array<Token>
}

const useStyles = makeStyles((theme) => ({
  tabContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  box: {
    backgroundColor: "#fff1ff",
    borderRadius: "25px",
    marginBottom: "2rem",
    padding: theme.spacing(2),
  },
  header: {
    color: "#fff1ff",
    fontSize: "2.5rem",
    paddingTop: "3rem",
    texAlign: "left",
  }
}))

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {

  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue))
  }

  const { account } = useEthers()

  const isConnected = account !== undefined

  const classes = useStyles()

  return (
    <Box>
      <div className={classes.header}>Stake Token</div>
      <Box className={classes.box}>
        <div>
          {isConnected ? (
            <TabContext value={selectedTokenIndex.toString()}>
              <TabList onChange={handleChange} aria-label="stake form tabs">
                {supportedTokens.map((token, index) => {
                  return (
                    <Tab
                      label={token.name}
                      value={index.toString()}
                      key={index}
                    />
                  )
                })}
              </TabList>
              {supportedTokens.map((token, index) => {
                return (
                  <TabPanel value={index.toString()} key={index}>
                    <div className={classes.tabContent}>
                      <WalletBalance
                        token={supportedTokens[selectedTokenIndex]}
                      />
                      {/* this is the same as */}
                      {/* The chainlink_defi props passing */}
                      <StakeForm token={supportedTokens[selectedTokenIndex]} />
                    </div>
                  </TabPanel>
                )
              })}
            </TabContext>
          ) : (
            <ConnectionRequiredMsg />
          )}
        </div>
      </Box>
    </Box>
  )
}
