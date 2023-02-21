import css from 'styled-jsx/css'; 
import { fonts, colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";
const backgroundcolor = addOpacityToColor(colors.primary, 0.3);

const sombras = addOpacityToColor('#fff', 0.1);

export const globalStyles = css.global`
html,
body {	
    background-image: 
        radial-gradient(${backgroundcolor}, 1px, transparent 1px),
        radial-gradient(${backgroundcolor}, 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    /* font-family: ${fonts.base}; */
}
* {
    box-sizing: border-box;
}
`

export default css`
div {
    display: grid;
    height: 100vh;
    place-items: center;
}
main {
    background: black;
    border-radius: 5px;
    box-shadow: 0 10px 25px ${backgroundcolor};
    height:100%;
    width: 100%;
    position: relative;
    overflow-y: auto;
}

@media (min-width: ${breakpoints.mobile}){
    main {
        height: 90vh;
        width: ${breakpoints.mobile};
    }
}`