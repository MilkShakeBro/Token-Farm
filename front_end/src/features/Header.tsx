import { Button, makeStyles } from "@material-ui/core"
import { useEthers } from "@usedapp/core"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1)
  },
  button: {
    backgroundColor: "#af8eb5",
    color: "white",
  }
}))

export const Header = () => {
  const classes = useStyles()

  const { account, activateBrowserWallet, deactivate } = useEthers()

  const isConnected = account !== undefined

  return (
    <div className={classes.container}>
      {isConnected ? (
        <>
          <Button 
            className={classes.button}
            >
            {`${account?.slice(0, 4)}...${account?.slice(-3)}`}
          </Button>
          <Button variant="contained" onClick={deactivate}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          className={classes.button}
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
    </div>
  )
}
