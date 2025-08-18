export interface Expense {
  id: string;
  user_id: string;  // Add this field to match the database schema
  title: string;
  category: string;
  description: string;
  amount: number;
  date: string;        // ISO date string
  created_at?: string; // Change to match the database column name
}

export interface Budget {
  id: string;
  user_id: string;     // Change from userId to match the database column name
  category: string;        // e.g. Food, Travel, Rent
  limit_amount: number;    // Change from limitAmount to match the database column name
  start_date: string;      // Change from startDate to match the database column name
  end_date: string;        // Change from endDate to match the database column name
  created_at?: string;     // Change from createdAt to match the database column name
}

