class theDate {
    constructor(d1, d2 = new Date()) {
        this.d1 = new Date(d1);
        this.d2 = d2;
    }

    inSeconds() {
        const t2 = this.d2.getTime();
        const t1 = this.d1.getTime();
        return parseInt((t2 - t1) / (3600));
    }

    inMinutes() {
        const t2 = this.d2.getTime();
        const t1 = this.d1.getTime();
        return parseInt((t2 - t1) / (60 * 3600));
    }

    inHours() {
        const t2 = this.d2.getTime();
        const t1 = this.d1.getTime();

        return parseInt((t2 - t1) / (3600 * 1000));
    }

    inDays() {
        const t2 = this.d2.getTime();
        const t1 = this.d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    }

    inMonths() {
        const d1Y = this.d1.getFullYear();
        const d2Y = this.d2.getFullYear();
        const d1M = this.d1.getMonth();
        const d2M = this.d2.getMonth();
        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    }

    inYears() {
        const months = this.inMonths();
        return Math.trunc(months / 12);
    }

    responseMessage(value, singular){
        const postfix = value === 1 ? singular : `${singular}s`;
        return `${value} ${postfix}`;
    }

    timeAgo() {
        const years = this.inYears();
        const months = this.inMonths();
        const days = this.inDays();
        const hours = this.inHours();
        const minutes = this.inMinutes();
        const seconds = this.inSeconds();
        if (seconds < 60) {
            return this.responseMessage(seconds, 'second');
        }
        if (minutes < 60) {
            return this.responseMessage(minutes, 'minute');
        }
        if (hours < 24) {
            return this.responseMessage(hours, 'hour');
        }
        if (days <= 31) {
            return this.responseMessage(days, 'day');
        }
        if (months < 12) {
            return this.responseMessage(months, 'month');
        }
        if (years >= 1) {
            return this.responseMessage(years, 'year');
        }
    }
}

export default theDate;