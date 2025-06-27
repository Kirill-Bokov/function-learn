import { AppErrorBoundary } from "@components/ErrorBoundary";
import { ErrorTrigger } from "@components/ErrorBoundary/ErrorTrigger";
import { Header } from "@components/Header";
import TopicRenderer from "@components/TopicRenderer";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <AppErrorBoundary>
      <TopicRenderer />
        <ErrorTrigger/>
      </AppErrorBoundary>
    </div>
  );
};
