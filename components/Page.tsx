import { PageExtensionSDK } from "@contentful/app-sdk";

interface AppPageLocationProps {
  sdk: PageExtensionSDK;
}

const Page: React.FC<AppPageLocationProps> = () => {
  return <p>Page location works!</p>;
};

export default Page;
