import { createClient } from "./client";
import { Expense } from "./models";

// ❌ remove await here
const supabase =  createClient();
// console.log("Access Token", await supabase.auth.getSession());

export const expenseService = {
  // ✅ Get all expenses for a user
  async getExpenses(userId: string): Promise<Expense[]> {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false });

    if (error) throw error;
    return data ?? [];
  },

  // ✅ Add new expense
  async addExpense(expense: Omit<Expense, "id" | "createdAt">): Promise<Expense> {
    const { data, error } = await supabase
      .from("expenses")
      .insert([expense]) // must be array
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // ✅ Update expense
  async updateExpense(id: string, expense: Partial<Expense>): Promise<Expense> {
    const { data, error } = await supabase
      .from("expenses")
      .update(expense)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // ✅ Delete expense
  async deleteExpense(id: string): Promise<boolean> {
    const { error } = await supabase
      .from("expenses")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  },
};
