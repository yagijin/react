import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    title: {
      marginTop: theme.spacing(3),
    },
  }));
  
  function getSteps() {
    return ['研究テーマ：ブレインコンピュータインターフェース', '目的', '内容'];
  }
  
  function GetImages(props) {
    switch (props.step) {
      case 0:
        return <Container maxWidth="md">
              <img src="./static/materials/research/ssvep.png"  alt="アイコン" width="100%"/>
              </Container>
      case 1:
        return <Container maxWidth="md">
                <img src="./static/materials/research/ssvep.png"  alt="ssvep" width="100%"/>
                </Container>
      case 2:
        return <Container maxWidth="md">
              <img src="./static/materials/research/ssvep.png"  alt="ssvep" width="100%"/>
              </Container>
      default:
        return <Typography>Unknown Image</Typography>
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return `生体情報を処理する研究室に在籍しています．研究分野は，ブレインコンピュータインターフェース（BCI）です．
                BCIは，脳波を用いたインターフェースで，これを使用すると脳波のみでキーボードやロボットなどの操作をすることができます．`;
      case 1:
        return `BCIは，しゃべることもできないような重度の運動障害の患者にコニュニケーションを取る手段を提供します．
                将来的には，そういった方々に使ってもらいたいと考えているため，安価で携帯型のBCIを作成することを目的に研究をしています．
                現在取り組んでいる内容としては，BCIとしての精度とコマンド数をあげるために，脳波の解析の方法についての提案や検証をしています．`;
      case 2:
        return `以下の図は，SSVEPという脳波成分を用いて作成されるBCIの概要です． 
                SSVEPは，一定の周波数で点滅する刺激を注視した際に，刺激の点滅周波数に同調して現れる脳波成分です． 
                異なる点滅周波数の刺激を複数用意して，被験者に任意の刺激を注視してもらうことを考えると，
                脳波成分を観察すれば被験者がどの刺激を注視しているかがわかります． この仕組みを利用すると以下の図のように，BCIが構築できます．`;
      default:
        return 'Unknown step';
    }
  }

function Research() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
        <React.Fragment>
        <CssBaseline />
        <MainHeader />
        <Container maxWidth="md" className={classes.title}>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                  Research
                </Typography>
        </Container>
        <Container maxWidth="md">
            <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <GetImages step={index}/>
                    <div className={classes.actionsContainer}>
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        <Button
                            disabled={activeStep === 2}
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            Next
                        </Button>
                        </div>
                    </div>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            </div>
        </Container>
        <MainFooter />
        </React.Fragment>
    );;
}

export default Research;