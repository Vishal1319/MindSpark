// OpenAI API configuration
const apiKey = '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'; // Replace with your actual API key
const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// User input (simulated for this example)
const userInput = 'Hello, world!';

// Set up data to send to OpenAI API
const data = {
  prompt: userInput + '\nChatbot:',
  temperature: 0.5,
  max_tokens: 60,
  n: 1,
  stop: '\n',
};

// Set up options for the fetch request
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify(data),
};

// Send request to OpenAI API and get response
fetch(apiEndpoint, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((responseData) => {
    const chatbotResponse = responseData.choices[0].text;
    // Output chatbot response (you can handle it as needed)
    console.log(chatbotResponse);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  console.log(chatbotResponse);