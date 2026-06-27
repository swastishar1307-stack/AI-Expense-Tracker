function checkAlerts(expenses, limits) {
  let alerts = []

  if (expenses.food > limits.food) {
    alerts.push("⚠️ Alert: You exceeded your Food budget! Spent Rs." + expenses.food + ", Limit is Rs." + limits.food)
  } else {
    alerts.push("✅ Food: Within budget")
  }

  if (expenses.travel > limits.travel) {
    alerts.push("⚠️ Alert: You exceeded your Travel budget! Spent Rs." + expenses.travel + ", Limit is Rs." + limits.travel)
  } else {
    alerts.push("✅ Travel: Within budget")
  }

  if (expenses.bills > limits.bills) {
    alerts.push("⚠️ Alert: You exceeded your Bills budget! Spent Rs." + expenses.bills + ", Limit is Rs." + limits.bills)
  } else {
    alerts.push("✅ Bills: Within budget")
  }

  if (expenses.entertainment > limits.entertainment) {
    alerts.push("⚠️ Alert: You exceeded your Entertainment budget! Spent Rs." + expenses.entertainment + ", Limit is Rs." + limits.entertainment)
  } else {
    alerts.push("✅ Entertainment: Within budget")
  }

  return alerts
}

module.exports = { checkAlerts }