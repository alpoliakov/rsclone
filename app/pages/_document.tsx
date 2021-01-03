import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from "react";
import { ServerStyleSheets} from "@material-ui/core";

class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>),
      })

    const initialProps = await  Document.getInitialProps(context);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
