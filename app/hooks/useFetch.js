import React from "react";

export default function useFetch() {
  const [response, setResponse] = React.useState(null);
  const [hasError, setHasError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (refetch) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          console.log(url);
          const res = await fetch(url);
          const json = await res.json();

          setResponse(json);
          setIsLoading(false);
        } catch (error) {
          setHasError(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [refetch, url]);

  return { response, hasError, isLoading, setRefetch, setUrl };
}
