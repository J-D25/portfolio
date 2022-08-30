export function dayFromDate(olddate, output){
    const oldDate = new Date(olddate);
    const currentDate = new Date();
    let timestampsDiff = currentDate.getTime() - oldDate.getTime();
    let calcDiff = 1000 * 3600 * 24;
    if (output === "years"){
      calcDiff = 1000 * 3600 * 24 * 365;
    }
    let daysDiff = timestampsDiff / calcDiff;
    return Math.round(daysDiff);
}