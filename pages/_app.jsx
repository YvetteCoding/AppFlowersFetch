function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: #000;
          color: #fff;
          font-family: Roboto, sans-serif;
          padding: 40px;
        }
        h1 {
          font-size: 40px;
          font-weight: 700;
        }
        h3 {
          font-size: 24px;
          font-weight: 600;
        }
        .flex {
          display: flex;
        }
        .flex.col {
          flex-direction: column;
        }
        .flex.row {
          flex-direction: row;
        }
        .flex.g-0 {
          gap: 0px;
        }
        .flex.g-1 {
          gap: 4px;
        }
        .flex.g-2 {
          gap: 8px;
        }
        .flex.g-3 {
          gap: 12px;
        }
        .flex.g-4 {
          gap: 24px;
        }
        .flex.g-5 {
          gap: 48px;
        }
        
      `}</style>
    </>
  );
}

export default MyApp;
