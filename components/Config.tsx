import { useEffect, useState } from "react";

import { AppExtensionSDK } from "@contentful/app-sdk";

interface AppConfigLocationProps {
  sdk: AppExtensionSDK;
}

const Config: React.FC<AppConfigLocationProps> = (
  props: AppConfigLocationProps
) => {
  const { sdk } = props;

  useEffect(() => {
    sdk.app.setReady();
  }, [sdk.app]);

  return <p>Config location does not work!</p>;
};

export default Config;
