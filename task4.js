let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
let operand = prompt("Enter a choice('first', 'last', or 'new')");

switch (operand) {
    case "first": 
        console.log(contacts[0].name, "/", contacts[0].phone, "/", contacts[0].email);
        break;
    case "last": 
        console.log(contacts[contacts.length-1].name, "/", contacts[contacts.length-1].phone, "/", contacts[contacts.length-1].email);
        break;
    case "new":
        let newname = window.prompt("Enter a name:");
        let newphone = window.prompt("Enter a phone:");
        let newemail = window.prompt("Enter a email:");
        let newcontact = {
            name:newname,
            phone:newphone,
            email:newemail
        }
        if (newname != "" && newphone != "" && newemail != "") {
            contacts.push(newcontact);
            for (let i = 0; i < contacts.length; i++) {
                console.log(contacts[i].name, "/", contacts[i].phone, "/", contacts[i].email)
            }
        } else {
            console.log("You did not provide all the information required.")
        }
        break;
   }

