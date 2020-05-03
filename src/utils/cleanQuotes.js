const cleanQuotes = (string) => {
    let transformedString = string.replace(/&quot;/g, '"');
    return transformedString.replace(/&amp;/g, "'");
};
export default cleanQuotes;