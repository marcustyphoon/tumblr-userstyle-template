import { css, keyToCss } from '../utilities/index.js';

export default css`
  /* ==UserStyle==
  @name           example
  @namespace      github.com/openstyles/stylus
  @version        1.0.0
  @description    A new userstyle
  @author         Me
  ==/UserStyle== */

  ${'@-moz-document domain("tumblr.com")'} {
    ${keyToCss('createPost')} > a {
      background-color: rgba(var(--white-on-dark), 0.13);
      color: rgba(var(--white-on-dark), 0.65);
      --icon-color-primary: rgba(var(--white-on-dark), 0.65);
    }
  }
`;
