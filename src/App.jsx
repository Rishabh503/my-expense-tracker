import { BrowserRouter, Outlet } from "react-router";
import { RealExpenses } from "./pages/RealExpenses";
import ExpenseNavbar from "./components/ExpenseNavbar";

export default function App() {
  return (
    
      <section>
        <ExpenseNavbar/>
        <Outlet/>
      </section>
   
  )
}