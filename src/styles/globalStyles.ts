import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700&display=swap');
// @import "tailwindcss/base";
// @import "tailwindcss/components";
// @import "tailwindcss/utilities";

// body {
//   height: 100vh;  
//   max-height: 100vh;
//   overflow: hidden;  
// }

html, body {
  /* font-family: "Source Sans Pro", sans-serif; */
  /* width: 100vw; */

  /* max-width: 100vw; */  
  /* width: 100%; */
  /* height: 100vh; */
}
  * {
    /* overflow: hidden; */
     list-style-type: none;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }  

   a {
     text-decoration: none;
   }

   :root {
     --main-sidebarwidth: 285px;
     --main-sidebar-iconwidth: 22px;
     --main-generalcolorblue: #005cb7;
     --chakra-colors-blue-900: #005cb7;
   }

   /* tbody {
        tr {
          line-height: 10px;
          
          border: 1px solid red;
        }
        td {
   

        }

    } */
`;