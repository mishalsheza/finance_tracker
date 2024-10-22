import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { SignIn } from "@clerk/clerk-react";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
function App() {
  return(
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/"  element={ 
            <FinancialRecordsProvider>
                <Dashboard/>
            </FinancialRecordsProvider>} 
            />
          <Route path="/auth"  element={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
