import { supabase } from './supabase'

// Define the Expense type
export type Expense = {
  id?: string
  title: string
  amount: number
  category: string
  date: string
  note?: string
}

// Add a new expense
export async function addExpense(expense: Expense) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not logged in')

  const { data, error } = await supabase
    .from('expenses')
    .insert([{ ...expense, user_id: user.id }])
    .select()

  if (error) throw error
  return data
}

// Get all expenses for the current user
export async function getExpenses() {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .order('date', { ascending: false })

  if (error) throw error
  return data
}

// Delete an expense
export async function deleteExpense(id: string) {
  const { error } = await supabase
    .from('expenses')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// Update an expense
export async function updateExpense(id: string, updates: Partial<Expense>) {
  const { data, error } = await supabase
    .from('expenses')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) throw error
  return data
}