//Function to get utc time
export const getUTCTime = () => {
    const currentDate  = new Date ();
    return currentDate.toISOString()
}