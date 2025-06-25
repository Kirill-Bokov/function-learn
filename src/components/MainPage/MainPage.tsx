import { AppErrorBoundary } from "@/ErrorBonduary";
import { ErrorTrigger } from "@components/ErrorTrigger";
import { Header } from "@components/Header";
import TopicRenderer from "@components/TopicRenderer";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <TopicRenderer />
      <AppErrorBoundary>
        <ErrorTrigger/>
      </AppErrorBoundary>
    </div>
  );
};
