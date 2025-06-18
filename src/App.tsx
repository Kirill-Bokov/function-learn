import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@components/Header";
import { TopicPage } from "@components/TopicPage";
import TopicRenderer from "@components/TopicRenderer";
import { MainPage } from "@components/MainPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/topic/:id" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
