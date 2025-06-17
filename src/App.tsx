import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@components/Header";
import { TopicPage } from "@components/TopicPage";
import TopicRenderer from "@components/TopicRenderer";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <TopicRenderer />
            </div>
          }
        />
        <Route path="/topic/:id" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
