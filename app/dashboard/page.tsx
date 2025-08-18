"use client";

import { Expense } from "@/lib/supabase/models";
import { addExpense, deleteExpense, getExpenses } from "@/app/actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
// import { expenseService } from "@/lib/supabase/server";

export default function Dashboard({ userId }: { userId: string }) {
  const { user } = useUser();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
    
  // Form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [amount, setAmount] = useState<number>();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  ); // default today

  // ✅ Fetch expenses
  useEffect(() => {
    async function fetchExpenses() {
      try {
        setLoading(true);
        const data = await getExpenses(userId);
        setExpenses(data);
      } catch (error) {
        console.error("Error in fetching Expenses", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
      } finally {
        setLoading(false);
      }
    }
    fetchExpenses();
  }, [userId]);

  // ✅ Add expense
  async function handleAddExpense(e: React.FormEvent) {
    e.preventDefault();
    try {
      const newExpense = await addExpense({
        user_id : userId,
        title, // Make sure to include title
        category,
        description,
        amount,
        date: new Date(date).toISOString(),
      });

      setExpenses([newExpense, ...expenses]);
      setTitle("");
      setCategory("General");
      setDescription("");
      setAmount(0);
      setDate(new Date().toISOString().split("T")[0]);
    } catch (error) {
      console.error("Error in adding Expense", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
    }
  }

  // ✅ Delete expense
  async function handleDelete(id: string) {
    try {
      await deleteExpense(id);
      setExpenses(expenses.filter((exp) => exp.id !== id));
    } catch (error) {
      console.error("Error deleting expense", error);
    }
  }

  return (
    <div className="container mx-auto px-8 py-8">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-playfair mb-2">
          Welcome Back, {user?.username ?? user?.emailAddresses[0].emailAddress}
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s your financial overview for this month
        </p>
      </div>

      {/* Add Expense Form */}
      <form
        onSubmit={handleAddExpense}
        className="mb-8 grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-black p-4 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="md:col-span-5 bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Expense
        </button>
      </form>

      {/* Expenses List */}
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : expenses.length === 0 ? (
          <p className="text-gray-500">No expenses yet. Start adding one!</p>
        ) : (
          <ul className="space-y-4">
            {expenses.map((exp) => (
              <li
                key={exp.id}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
              >
                <div>
                  <p className="font-semibold">{exp.category}</p>
                  <p className="text-sm text-gray-600">
                    {exp.description || "No description"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(exp.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg text-green-700">
                    ₹{exp.amount}
                  </span>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
