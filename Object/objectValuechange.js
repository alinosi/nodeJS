const account = {
    balance: 1000,
    debt: 10,
    'sal-ary': 1200,
  };
  
  account.balance = 2000;
  const salary = account['sal-ary'] = 1000;
  account ['sal-ary'] = 10
  console.log(account.balance, salary, account['sal-ary'] ); // Output: 2000
  