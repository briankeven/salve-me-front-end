import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocuments extends Document {
    render() {
        return(
         <Html>
             <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                <link type="text/css" rel="stylesheet" />
             </Head>
             <body>
                 <Main />
                 <NextScript />
             </body>
         </Html>
        );
    }
}
