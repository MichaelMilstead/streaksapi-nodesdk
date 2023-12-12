import axios from "axios";

type HttpMethod = "get" | "post" | "patch" | "delete" | "put";

async function makeRequest(
  method: HttpMethod,
  url: string,
  body: any,
  customHeaders: Record<string, string>
) {
  const config = {
    method,
    url,
    // Only include the data property if body is not null
    ...(body !== null ? { data: body } : {}),
    headers: {
      "Content-Type": "application/json",
      ...customHeaders,
    },
  };

  const response = await axios(config);
  const data = response.data;
  return data;
}

export async function get(url: string, customHeaders = {}) {
  return makeRequest("get", url, null, customHeaders);
}

export async function post(url: string, body: any, customHeaders = {}) {
  return makeRequest("post", url, body, customHeaders);
}

export async function update(url: string, body: any, customHeaders = {}) {
  return makeRequest("patch", url, body, customHeaders);
}

export async function remove(url: string, customHeaders = {}) {
  return makeRequest("delete", url, null, customHeaders);
}

export async function put(url: string, body: any, customHeaders = {}) {
  return makeRequest("put", url, body, customHeaders);
}
