const time = (ms, userNameGiven) => {
    return new Promise((resolve, reject) => {
      if (userNameGiven) {
        setTimeout(resolve, ms);
      } else {
        reject(new Error("Please give a valid username"));
      }
    });
  };
  
  async function writeToScreen(message) {
    const outputElement = document.getElementById('output');
    outputElement.textContent += message + '\n';
    outputElement.scrollTop = outputElement.scrollHeight;
    await time(3000, true); 
  }
  
  async function startHacking() {
    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value.trim();
    if (username === '') {
      alert('Please enter a valid username.');
      return;
    }
  
    try {
     
      await writeToScreen(`Entered Username: ${username}`);
  
      await writeToScreen('Connecting to Instagram and Threads platform');
  
      await writeToScreen(`Searching for the user ${username}`);
  
      await writeToScreen(`Success!! the user ${username} is found`);
  
      await writeToScreen('Getting the account info');
  
      await writeToScreen('Refactoring and fetching the password of the account');
  
      await writeToScreen('Success, password found!');
  
      await writeToScreen('Password stored in our Database!');
    } catch (error) {
      await writeToScreen(error.message);
    }
  }
  