import { DocSearch } from "@docsearch/react";
import React, { useEffect } from "react";

import "@docsearch/css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Search() {
  const { siteConfig } = useDocusaurusContext();
  const algoliaConfig = siteConfig.themeConfig.algolia as Record<string, any>; // Type assertion to ensure the spread works

  useEffect(() => {
    if (algoliaConfig == null) {
      throw new Error(`You need to specify 'algolia' object in 'themeConfig'`);
    }

    console.log("algoliaConfig", algoliaConfig);
  }, []);

  return (
    <DocSearch
      apiKey={algoliaConfig.apiKey}
      indexName={algoliaConfig.indexName}
      appId={algoliaConfig.appId}
      insights={algoliaConfig.insights}
    />
  );
}
