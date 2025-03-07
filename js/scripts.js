//Bootstrap modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//Membership amount storage
//from the membership form this function works to make an array from the selected membership amount inpout from the radio input type.
let membershipAmounts = [];

function addMembershipAmount(membershipCost){ 
    if (option1){
        membershipAmounts.push(50);
    } else if (option2){
        membershipAmounts.push(120);
    } else if (option3){
        membershipAmounts.push(500);
    } else if (option4){
        membershipAmounts.push(1000);
    } else if (option5){
        membershipAmounts.push(2500);
    } else if (option6){
        membershipAmounts.push(otherAmount); //If other is selected than the 
    }
    return membershipAmounts;
}
console.log(addMembershipAmount("option2")); //[120]
console.log(addMembershipAmount("option5")); //[120, 2500]

//Total membership amount
//this function is used to have a total amount off all membership amounts using the array from the addMembershipAmount() array.
let membershipSum = 0;

function totalMembershipAmounts(){
    for (let i = 0; i < membershipAmounts.length; i++) {
        membershipSum += membershipAmounts[i];
    }
    return membershipSum
}

console.log(membershipSum)

//Welcome alert message to new members. Alert message will pop-up to welcome new member when they submit the membership form
function welcome(memberFirstName) {
    alert(memberFirstName + ", welcome to CNPS! Thank you for becoming a member");
}

//Make a list of member first names
let members =[]

function addmemberFirstName(memberFirstName){
    members.push(memberFirstName)
    return members
}
console.log(members)