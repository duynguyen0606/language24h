import moment from 'moment'

function ConvertToMinutes(number) {
    return moment.utc(number * 1000).format('mm:ss')
}

export default ConvertToMinutes
