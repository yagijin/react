import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));



function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <MainHeader />
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="lg">
                <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
                    <LockIcon fontSize="Large" /> Privacy Policy
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph>
                本サイトでは，アクセスデータの分析と解析のためにGoogle Analyticsを使用しています．<br/>
                その際に，Googleがお使いのブラウザ上にCookieを設定したり既存のCookieの読み取りを行う場合があります．<br />
                また，本サイトをご利用中のブラウザは，Googleに特定の非個人情報を自動的に送信します．
                当サイトはそれらの情報を，サイトの質の向上のために利用する可能性があります．
                本サイトのユーザは本サイトを利用することにより，上記方法および目的においてGoogleとサイト管理者が行うこのようなデータ処理に対して，
                許可を与えたものとみなします．<br />
                Google社によるアクセス情報の収集方法および利用方法については，
                <a href="https://www.google.com/analytics/terms/jp.html" target="_brank">Google Analyticsサービス利用規約</a>
                および<a href="https://policies.google.com/privacy?hl=en&gl=en" target="_brank">Google社プライバシーポリシー</a>
                によって定められています．<br/>
                なお,ユーザはブラウザの設定によりCookieの受け取りを拒否することができます.
                </Typography>
                </Container>
            </div>
        </main>
        <MainFooter />
        </React.Fragment>
    );
}

export default PrivacyPolicy;