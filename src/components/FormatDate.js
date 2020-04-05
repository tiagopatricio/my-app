export default function FormatDate(date) {
    var formatedDate = '';
    formatedDate = date.day ? date.day+'/' : formatedDate ;
    formatedDate = date.month ? formatedDate+date.month+'/' : formatedDate ;
    return formatedDate+date.year
}