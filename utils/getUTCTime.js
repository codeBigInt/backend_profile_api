export const getUTCTime = () => {
    const currentDate  = new Date ();
    return currentDate.toISOString()
}