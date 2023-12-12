export async function getAuthHeader(apiKey: string) {
  const headers = {
    "x-api-key": `${apiKey}`,
  };

  return headers;
}
