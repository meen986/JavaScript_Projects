const date_input = document.getElementById("date_input")
date_input.max = new Date().toISOString().split("T")[0] // disable future date
const calculate_btn = document.getElementById("calculate_btn")
const result = document.getElementById("result")

const calculate_func = () => {
    // user input value
    const user_date_value = date_input.value

    // empty condition
    if (user_date_value == "") {
        alert("Pick Your Date to Calculate")
    }

    // user date convert into DD MM YYY
    const user_date = new Date(user_date_value)
    const user_date_date = user_date.getDate() // User Date
    const user_date_month = user_date.getMonth() + 1 // User Month
    const user_date_year = user_date.getFullYear() // User Year

    // today date convert into DD MM YYY
    const today_date = new Date()
    let today_date_date = today_date.getDate() // Today Date
    let today_date_month = today_date.getMonth() + 1 // Today Month
    let today_date_year = today_date.getFullYear() // Today Year

    let result_date, result_month, result_year

    // year calculation
    result_year = (today_date_year - user_date_year)

    // months calculation
    if (user_date_month <= today_date_month) {
        result_month = (today_date_month - user_date_month)
    } else {
        result_year--
        result_month = (today_date_month + 12) - user_date_month
    }

    // days calculation
    let numberOfDays = daysInAMonth(user_date_year, user_date_month)
    if (user_date_date <= today_date_date) {
        result_date = (today_date_date - user_date_date)
    } else {
        result_month--
        result_date = (today_date_date + numberOfDays) - user_date_date
    }

    if(result_month < 0){
        result_year--
        result_month = 11
    }

    // final result
    result.innerHTML = `Your age is: ${result_year} Year(s), ${result_month} Month(s) and ${result_date} Day(s)`
    result.style.display = "block"

}

const daysInAMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

calculate_btn.addEventListener("click", calculate_func)
