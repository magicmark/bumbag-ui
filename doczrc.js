import { css } from './src/styled';

export default {
  dest: '/docs',
  menu: ['Home', 'Getting Started', 'Primitives', 'Palette', 'Typography', 'Layout', 'Components', 'Form', 'Utilities'],
  themeConfig: {
    colors: {
      primary: '#3926a5',
      text: '#435a6f'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/fannypackui/fannypack/master/logo.png',
      width: '230px'
    },
    showPlaygroundEditor: true,
    styles: {
      body: css`
        font-family: unset;
        font-size: 16px;
        color: unset;

        // Quick dirty hacks until we create our own docz theme
        & nav a {
          font-size: 16px !important;
        }

        & #get-started a {
          color: #3926a5;
        }

        & nav > div:first-child {
          display: none;
        }

        & > div > div > div {
          font-size: 16px !important;
        }
      `,
      h1: {
        fontWeight: 'bold',
        fontSize: '48px',
        fontFamily: 'unset'
      },
      h2: {
        fontWeight: '600',
        fontFamily: 'unset'
      },
      paragraph: {
        fontSize: '16px'
      },
      li: {
        fontSize: '16px'
      }
    }
  },
  wrapper: 'src/_docs/wrapper',
  codeSandbox: false
};
