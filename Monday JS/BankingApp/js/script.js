let bank = [];
class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance) {
        this.accountID = generateAccNum();
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.accountType = accountType;
        this.balance = balance;
        this.status = "open";
    }
    initTransfer(amount, accountNum) {
        let elem = document.getElementById('trans');
        // for (let i = 0; i < bank.length; i++) {
        //     let option = document.getElementById('acc' + i + 1);
        //     option.innerHTML = bank[i].accountID.value;
        // }
        let option1 = document.getElementById('acc1');
        option1.innerHTML = bank[0].accountID;
        let option2 = document.getElementById('acc2');
        option2.innerHTML = bank[1].accountID;
        let option3 = document.getElementById('acc3');
        option3.innerHTML = bank[2].accountID;


        // let choice = document.createElement('select');
        // choice.
        // for (let i = 0; i < bank.length; i++) {
        //     let option = document.createElement('option')
        //     option.innerHTML = bank[i].accountID;
        //     choice.appendChild(option);
        // }
        // elem.appendChild(choice);
        elem.style.visibility = "visible";
    }
    transfer() {
        let amount = document.getElementById('trans-amt').value;
        let acct = document.getElementById('trans-acct').value
        this.balance -= amount;
        for (let i = 0; i < bank.length; i++) {
            if (acct == bank[i].accountID) {
                bank[i].balance += amount;
            }
        }
        this.showAccount();
        alert("You have transfered $" + amount + " to account: " + acct + ".");
        if (this.balance < 0) {
            this.balance -= 35.0;
            alert("You are deficient in funds.  You are being charged a $35.00 penalty fee.")
            this.status = "frozen";
            this.showAccount();
        }

    }
    withdraw() {
        let amount = prompt("Enter amount to withdraw: ")
        this.balance -= amount;
        console.log("Withdrew: $" + amount + " from: " + this.accountType);
        alert("Withdrew: $" + amount + " from: " + this.accountType);
        showAccount();
        if (this.balance < 0) {
            this.balance -= 35.0;
            alert("You are deficient in funds.  You are being charged a $35.00 penalty fee.");
            this.status = "frozen";
        }
        showAccount();
    }
    checkBalance() {
        console.log("$" + this.balance)
        if (this.balance < 0) {
            this.balance -= 35.0;
            alert("You are deficient in funds.  You are being charged a $35.00 penalty fee.");
            this.status = "frozen";
        }
    }
    closeAccount() {
        alert("You have closed your account in the amount of $" + this.balance);
        this.balance = 0;
        this.status = "closed";
        showAccount();
    }
    showAccount() {
        let details = document.getElementById("acc-deets");
        details.style.visibility = "visible";

        let id = document.getElementById("acc-num");
        id.innerHTML = this.accountID;

        let accountName = document.getElementById("name");
        accountName.innerHTML = this.firstName + " " + this.middleName + " " + this.lastName;

        let type = document.getElementById("type");
        type.innerHTML = this.accountType;

        let bal = document.getElementById("bal");
        bal.innerHTML = "$" + this.accountType.balance;

        let status = document.getElementById("stat");
        status.innerHTML = this.status;
    }

}
function openAccount() {
    let iBalance = document.getElementById("i-balance").value;
    let firstName = document.getElementById("f-name").value;
    let lastName = document.getElementById("l-name").value;
    let middleName = document.getElementById("m-name").value;
    let accountType = document.getElementById("acc-type").value;

    if (iBalance >= 100.00) {
        account = new BankAccount(firstName, lastName, middleName, accountType, iBalance);
        bank.push(account);
        let details = document.getElementById("acc-deets");
        details.style.visibility = "visible";
        document.getElementById('show').style.visibility = "visible";

        let id = document.getElementById("acc-num");
        id.innerHTML = account.accountID;

        let accountName = document.getElementById("name");
        accountName.innerHTML = account.firstName + " " + account.middleName + " " + account.lastName;

        let type = document.getElementById("type");
        type.innerHTML = account.accountType;

        let bal = document.getElementById("bal");
        bal.innerHTML = "$" + account.balance;

        let status = document.getElementById("stat");
        status.innerHTML = account.status;


    } else {
        alert("You have insufficient funds to open an account.");
    }
    console.log(iBalance);
}
function showAccount() {
    let details = document.getElementById("acc-deets");
    details.style.visibility = "visible";

    let id = document.getElementById("acc-num");
    id.innerHTML = account.accountID;

    let accountName = document.getElementById("name");
    accountName.innerHTML = account.firstName + " " + account.middleName + " " + account.lastName;

    let type = document.getElementById("type");
    type.innerHTML = account.accountType;

    let bal = document.getElementById("bal");
    bal.innerHTML = "$" + account.balance;

    let status = document.getElementById("stat");
    status.innerHTML = account.status;
}
function reset() {
    document.getElementById('frm1').reset();
}
function generateAccNum() {
    let rnd = Math.floor(Math.random() * 1000000);
    return rnd;
}
account2 = new BankAccount("John", "Doe", "Wayne", "savings", 5000.00);
bank.push(account2);
account3 = new BankAccount("Jane", "Doe", "Penny", "checking", 17000.00);
bank.push(account3);
