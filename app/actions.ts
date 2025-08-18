"use server";

import { Expense } from "@/lib/supabase/models";
import { expenseService } from "@/lib/supabase/server";

export async function getExpenses(userId: string): Promise<Expense[]> {
  return expenseService.getExpenses(userId);
}

export async function addExpense(expense: Omit<Expense, "id" | "createdAt">): Promise<Expense> {
  return expenseService.addExpense(expense);
}

export async function updateExpense(id: string, expense: Partial<Expense>): Promise<Expense> {
  return expenseService.updateExpense(id, expense);
}

export async function deleteExpense(id: string): Promise<boolean> {
  return expenseService.deleteExpense(id);
}