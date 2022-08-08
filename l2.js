function calculate() {
	let ticketNum = document.getElementById('txtTicket').value;
    let sumTicketS = 0;
    let sumTicketF = 0;

    for(let i = 0, j = 3; i < 3; i += 1, j += 1){
        sumTicketS += +ticketNum[i];
        sumTicketF += +ticketNum[j];
    }

    let i = 0;
    let j = 3;
    while(i < 3){
        sumTicketS += +ticketNum[i];
        sumTicketF += +ticketNum[j];
        i += 1;
        j += 1;
    }

    const answer = sumTicketS == sumTicketF ? "You are lucky" : "Not today";

    document.getElementById("result").innerHTML = answer;       
}