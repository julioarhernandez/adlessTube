const durationConverter = (time) => {
    const addCeros = (items) => {
        if (items.length > 1){
           const ceroPadded = items.map((v,i) => {
               return (i === 0  ? v : String(v).padStart(2,'0'));
           });
           return ceroPadded;
        }else{
            const tempItems = [];
            tempItems.push(`${items[0]}S`);
            return tempItems;
        }
    };
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
        let b = addCeros(a);
        return b.join(':');
    }
    return;
};
export default durationConverter;