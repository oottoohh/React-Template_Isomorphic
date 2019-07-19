import clone from 'clone';
import defaultTheme from './themedefault';

const theme = clone(defaultTheme);
theme.palette.primary = ["#0058a9"];
theme.palette.secondary = ["#f3ad5b"];
export default theme;
