window.setInterval(alert("Please, use me..."),30000)
function cal()
{
    let A = document.getElementById("a").value
    let B = document.getElementById("b").value
    let C = document.getElementById("c").value
    let ans = eval(A+B+C)
    if (ans < 0 )
        {
            alert("Error :(")
            return;
        }else if(isNaN(ans) || ans == Infinity)
        {
                alert("It’s over 9000!")
            return;
        }
            console.log(ans)
            alert(ans)
}