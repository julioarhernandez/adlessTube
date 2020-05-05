const breakpoints = {
    sm: '768',
    md: '1024'
};

const mediaQuery = {
    sm: `(max-width: ${breakpoints.sm - 1}px)`,
    smUp: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md - 1}px)`,
    mdDown: `(max-width: ${breakpoints.md - 1}px)`,
    lg: `(min-width: ${breakpoints.md}px)`
};

export default mediaQuery;