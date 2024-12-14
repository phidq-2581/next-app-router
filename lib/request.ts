import { headers } from 'next/headers';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method: HttpMethod;
  endpoint: string;
  body?: any;
  token?: string;
}

export async function fetchApi<T>({
  method,
  endpoint,
  body,
  token,
}: FetchOptions): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const headersInit: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headersInit['Authorization'] = `Bearer ${token}`;
  } else {
    const nextHeaders = await headers();
    const authHeader = nextHeaders.get('Authorization');
    if (authHeader) {
      headersInit['Authorization'] = authHeader;
    }
  }

  const requestOptions: RequestInit = {
    method,
    headers: headersInit,
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    requestOptions.body = JSON.stringify(body);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 50000);
  requestOptions.signal = controller.signal;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, requestOptions);
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch API');
    }

    if (response.status === 204) {
      // No Content
      return null as T;
    }

    return (await response.json()) as T;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    // eslint-disable-next-line no-console
    console.error('Fetch API Error:', error.message);
    throw error;
  }
}

// CRUD Helpers
export const request = {
  get: async <T>(endpoint: string, token?: string): Promise<T> => {
    return await fetchApi<T>({ method: 'GET', endpoint, token });
  },

  post: async <T>(endpoint: string, body: any, token?: string): Promise<T> => {
    return await fetchApi<T>({
      method: 'POST',
      endpoint,
      body,
      token,
    });
  },

  put: async <T>(endpoint: string, body: any, token?: string): Promise<T> => {
    return await fetchApi<T>({ method: 'PUT', endpoint, body, token });
  },

  delete: async <T>(endpoint: string, token?: string): Promise<T> => {
    return await fetchApi<T>({ method: 'DELETE', endpoint, token });
  },
};

// Usage Example
// const data = await request.get<MyDataType>("/users");
