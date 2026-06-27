async function getBudgetSuggestions(expenses) {
  let apiKey = "PrCAGq8xAxoCZHXiZr6M3qP4308vPo1vwYRrBd8g"

  let summary = "Food: Rs." + expenses.food + "\n" +
                "Travel: Rs." + expenses.travel + "\n" +
                "Bills: Rs." + expenses.bills + "\n" +
                "Entertainment: Rs." + expenses.entertainment + "\n" +
                "Total: Rs." + expenses.total

  let message = "Here is a person's monthly expense summary:\n" + 
                summary + 
                "\nGive 2-3 short, practical budget suggestions based on this spending."

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
          content: message
        }
      ]
    })
  })

  let data = await response.json()
  let suggestions = data.message.content[0].text.trim()
  return suggestions
}
module.exports = { getBudgetSuggestions }