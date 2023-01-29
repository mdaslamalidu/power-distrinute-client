export const getAllBills = async () => {
  const url = "http://localhost:5000/billing-list";

  const response = await fetch(url);
  const totalBill = await response.json();
  return totalBill;
};
