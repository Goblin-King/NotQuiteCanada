function dropNavFunc(){
    document.getElementById("dropDown").classList.toggle("show");
}
function daysTillElection{
var election_date = new Date(2019,10,3);
 var now_date = new Date( );
 var Difference_In_Time = election_date.getTime() - now_date.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
return “It’s <br>” Difference_In_Days “until the general election. Register to make your vote count!"):
}
