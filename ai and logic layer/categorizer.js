async function getCategory(expenseText) {
  let apiKey = "PrCAGq8xAxoCZHXiZr6M3qP4308vPo1vwYRrBd8g"
  
  let response = await fetch("https://api.cohere.ai/v2/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: "Categorize this expense into one word only (Food, Travel, Bills, Entertainment, Shopping, or Other): " + expenseText
        }
      ]
    })
  })

  let data = await response.json()
  let category = data.message.content[0].text.trim()
  return category
}
module.exports = { getCategory }