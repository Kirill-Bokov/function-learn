import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopicPage } from "@components/TopicPage";
import { MainPage } from "@components/MainPage";
import { LanguageProvider } from "./LanguageContext";

export const App = () => {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/topic/:id" element={<TopicPage />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
};

export default App;
