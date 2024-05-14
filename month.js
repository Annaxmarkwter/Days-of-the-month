function calculateDays(){
    let monthInput = document.getElementById('monthInput').value.trim().toLowerCase()
    let daysInMonth = 0

    switch (monthInput){
        case 'january' :
        case 'march' :
        case 'may' :
        case 'july' :
        case 'august' :
        case 'octobert' :
        case 'december' :
            daysInMonth = 31;
            break;
            case 'april' :
            case 'june' :
            case 'september' :
            case 'november' :

            daysInMonth = 30;
             break;
             case 'february' :
                daysInMonth = 28;
                break;
                default :
                daysInMonth = 'Month does not exist'
    }

    document.getElementById('result').innerText = typeof daysInMonth === 'number' ? `Number of days in ${monthInput} : ${daysInMonth}` : daysInMonth;
}
