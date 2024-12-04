// class BankAccount {
//   constructor(balance) {
//     if (balance < 0) {
//       throw new Error("Initial balance cannot be negative.");
//     }
//     this.balance = balance;
//     this.accountId = ++BankAccount.lastId;
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       throw new Error("Deposit amount must be positive.");
//     }
//     this.balance += amount;
//     return `Deposited ${amount}. new balance: ${this.balance}`;
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       throw new Error("Withdrawal amount must be positive.");
//     }
//     if (amount > this.balance) {
//       throw new Error("Insufficient balance");
//     }
//     this.balance -= amount;
//     return `Withdrew ${amount}. New balance: ${this.balance}`;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// class User {
//   static lastId = 0;

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.id = ++User.lastId;
//     this.bankAccounts = [];
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   get getId() {
//     return this.id;
//   }

//   addBankAccount(balance) {
//     const newAccount = new BankAccount(balance);
//     this.bankAccounts.push(newAccount);
//     return newAccount;
//   }

//   pay(account, amount) {
//     if (!this.bankAccounts.includes(account)) {
//       throw new Error("Bank account not found.");
//     }
//     if (account.balance < amount) {
//       throw new Error("Insufficient funds.");
//     }
//     account.balance -= amount;
//     return `Paid ${amount} from account ${account.accountId}.`;
//   }

//   receive(account, amount) {
//     if (!this.bankAccounts.includes(account)) {
//       throw new Error("Bank account not found.");
//     }
//     account.balance += amount;
//     return `Received ${amount} into account ${account.accountId}.`;
//   }
// }

// lastId = 0;

// const user = new User("John", "Doe");
// console.log(user.fullName);
// console.log(user.getId);

// const account = user.addBankAccount(500);
// console.log(account);

// console.log(user.pay(account, 100));
// console.log(user.receive(account, 50));
// console.log(account.getBalance());
// console.log(account.accountId);

//////////////////// ES5/////////////////////////////////
function BankAccount(balance) {
  if (balance < 0) {
    throw new Error("Initial balance cannot be negative.");
  }
  this.balance = balance;
  this.accountId = ++BankAccount.lastId;
}

BankAccount.lastId = 0;

BankAccount.prototype.deposit = function (amount) {
  if (amount <= 0) {
    throw new Error("Deposit amount must be positive.");
  }
  this.balance += amount;
  return "Deposited " + amount + ". New balance: " + this.balance;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be positive.");
  }
  if (amount > this.balance) {
    throw new Error("Insufficient balance");
  }
  this.balance -= amount;
  return "Withdrew " + amount + ". New balance: " + this.balance;
};

BankAccount.prototype.getBalance = function () {
  return this.balance;
};

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = ++User.lastId;
  this.bankAccounts = [];
}

User.lastId = 0;

User.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

User.prototype.getId = function () {
  return this.id;
};

User.prototype.addBankAccount = function (balance) {
  var newAccount = new BankAccount(balance);
  this.bankAccounts.push(newAccount);
  return newAccount;
};

User.prototype.pay = function (account, amount) {
  if (this.bankAccounts.indexOf(account) === -1) {
    throw new Error("Bank account not found");
  }
  if (account.balance < amount) {
    throw new Error("Insufficient funds");
  }
  account.balance -= amount;
  return "Paid " + amount + " from account " + account.accountId;
};

User.prototype.receive = function (account, amount) {
  if (this.bankAccounts.indexOf(account) === -1) {
    throw new Error("Bank account not found");
  }
  account.balance += amount;
  return "Received " + amount + " into account " + account.accountId;
};

var user = new User("John", "Doe");
console.log(user.getFullName());
console.log(user.getId()); // 1

var account = user.addBankAccount(500);
console.log(account);
console.log(user.pay(account, 100));
console.log(user.receive(account, 50));
console.log(account.getBalance());
console.log(account.accountId);
