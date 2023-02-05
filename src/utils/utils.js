export const formatHour = (hours) =>{
    if (hours < 10){
        return `0${hours}:00`
    }else{
        return `${hours}:00`
    }
}