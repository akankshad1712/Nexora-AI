import { Customer } from "@/types/customer";

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    phone: "+91 98765 43210",
    totalOrders: 12,
    totalSpent: 24500,
    status: "Active",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 91234 56789",
    totalOrders: 5,
    totalSpent: 8900,
    status: "Active",
  },
  {
    id: "3",
    name: "Arjun Nair",
    email: "arjun.nair@example.com",
    phone: "+91 99887 66554",
    totalOrders: 0,
    totalSpent: 0,
    status: "Inactive",
  },
  {
    id: "4",
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@example.com",
    phone: "+91 90909 08080",
    totalOrders: 21,
    totalSpent: 56200,
    status: "Active",
  },
];