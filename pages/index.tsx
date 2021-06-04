import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), {
  ssr: false,
  loading: () => <p>Loading module...</p>,
});

const Index: React.FC = () => {
  return <App />;
};

export default Index;
