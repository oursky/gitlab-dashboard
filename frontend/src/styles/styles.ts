import {makeStyles, Theme, createStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useRootStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(6),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      backgroundColor: grey[100],
      minHeight: "100vh",
    },
    blockTitle: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      fontSize: 20,
      fontWeight: 400,
      color: grey[600],
    },
    paper: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
    },
  })
);

export const boxStyles = {
    borderColor:"grey.400",
    border: 1,
    borderRadius: 2,
}

const pipelineBaseStyles = {
    border: 1,
    borderRadius: 2,
}
export const successStyles = {
    borderColor:"#4caf50",
    ...pipelineBaseStyles,
}

export const failedStyles = {
    borderColor:"#f44336",
    ...pipelineBaseStyles,
}

export const pendingStyles = {
    borderColor:"#ffc107",
    ...pipelineBaseStyles,
}

export const runningStyles = {
    borderColor:"#2196f3",
    ...pipelineBaseStyles,
}

export const manualStyles = {
    borderColor:"#eeeeee",
    ...pipelineBaseStyles,
}


export const canceledStyles = {
    borderColor:"#212121",
    ...pipelineBaseStyles,
}

export const runnerActiveStyles = {
    borderColor:"#90caf9",
    ...pipelineBaseStyles,
}

export const runnerOfflineStyles = {
    borderColor:"#ef9a9a",
    ...pipelineBaseStyles,
}

export const runnerOnlineStyles = {
    borderColor:"#a5d6a7",
    ...pipelineBaseStyles,
}

export const runnerPausedStyles = {
    borderColor:"#ffe082",
    ...pipelineBaseStyles,
}

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
            fontSize: 10,
            padding: theme.spacing(1),
            color: grey[800],
        },
        pipelineCard: {
            fontSize: 8,
        },
        content: {
            padding: 0,
            marginTop: 0.5, 
            marginBottom: 0,
            fontSize: 6,
        },
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