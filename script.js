  // Function to delay execution
      const delayExecution = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay * 1000));

      // Function to display message after delay
      const displayMessage = async () => {
        const textInput = document.getElementById('text').value;
        const delayInput = document.getElementById('delay').value;

        if (textInput && delayInput) {
          const outputDiv = document.getElementById('output');
          outputDiv.textContent = 'Waiting...';

          await delayExecution(delayInput);
          outputDiv.textContent = textInput;
        }
      };

      // Attach click event listener to the button
      const btn = document.getElementById('btn');
      btn.addEventListener('click', displayMessage);
