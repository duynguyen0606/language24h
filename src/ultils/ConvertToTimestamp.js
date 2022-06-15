import moment from "moment";

function ConvertToTimestamp(number) {
    return moment(number).format("hh:mm:ss DD/MM/YYYY")
}

export default ConvertToTimestamp;