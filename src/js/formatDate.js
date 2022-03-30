/*
  expected format is: "2022-03-30 06:00:00"
*/
function formatDate(str) {
    let splitStr = str.split("-");
    let monthIdx = parseInt(splitStr[1], 10) - 1;

    // parseInt is short way to remove leading 0, if present
    let day = parseInt(splitStr[2], 10);

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return `${months[monthIdx]} ${day}`;
}

module.exports = formatDate;
