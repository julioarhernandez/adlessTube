const durationConverter = (time) => {
    if (time === "PT0S" || time === "P0D"){
            return "LIVE";
        }
        if (time) {
            var a = time.match(/\d+/g);
            if (time.indexOf('M') >= 0 && time.indexOf('H') === -1 && time.indexOf('S') === -1) {
                a = [0, a[0], 0];
            }
            if (time.indexOf('H') >= 0 && time.indexOf('M') === -1) {
                a = [a[0], 0, a[1]];
            }
            if (time.indexOf('H') >= 0 && time.indexOf('M') === -1 && time.indexOf('S') === -1) {
                a = [a[0], 0, 0];
            }
            return a.join(':');
        }
        return;
};
export default durationConverter;