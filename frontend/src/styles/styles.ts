import {makeStyles, Theme, createStyles} from "@material-ui/core";
import {lightBlue, red, teal, grey, yellow} from "@material-ui/core/colors";

export const useRootStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: lightBlue[50],
      minHeight: "100vh",
    },
    paper: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
    },
  })
);

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexDirection: "column",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            height: 60,
            lineHeight: 1.5,
        },
        projectNameCard: {
            fontSize: 12,
        },
        pipelineCard: {
            fontSize: 8,
        },
        cardSuccess: {
            backgroundColor: teal[100],
        },
        cardFailed: {
            backgroundColor: red[400],
            color: grey[50],
            fontWeight: 700,
        },
        cardPending: {
            backgroundColor: lightBlue[100],
        },
        cardRunning: {
            backgroundColor: yellow[600],
        },
        box: {
        },
        content: {
            padding: 0,
            margin: 0,
        },
        smallContent: {
            fontSize: 6,
        }
    }),
);

export const useRunnerStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexDirection: "column",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            height: 80,
            lineHeight: 0,
            fontSize: 8,
        },
    }),
);