import React, { useEffect, useState } from "react";

import {
  PageExtensionSDK,
  init,
  locations,
  Locations,
  AppExtensionSDK,
} from "@contentful/app-sdk";
import Page from "./Page";
import Config from "./Config";

const App: React.FC = () => {
  const [location, setLocation] =
    useState<Locations[keyof Locations] | null>(null);
  const [sdk, setSdk] =
    useState<PageExtensionSDK | AppExtensionSDK | null>(null);

  useEffect(() => {
    init((receivedSdk) => {
      setSdk(receivedSdk);

      if (receivedSdk.location.is(locations.LOCATION_PAGE)) {
        setLocation(locations.LOCATION_PAGE);
      }

      if (receivedSdk.location.is(locations.LOCATION_APP_CONFIG)) {
        setLocation(locations.LOCATION_APP_CONFIG);
      }
    });
  }, []);

  if (location === locations.LOCATION_PAGE && sdk !== null) {
    return <Page sdk={sdk as PageExtensionSDK} />;
  }

  if (location === locations.LOCATION_APP_CONFIG && sdk !== null) {
    return <Config sdk={sdk as AppExtensionSDK} />;
  }

  return <p>Loading...</p>;
};

export default App;
