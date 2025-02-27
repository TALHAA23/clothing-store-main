interface PageSearchParams {
  searchParams?: {
    query?: string;
    page?: string;
    d?: string;
    addnew?: string;
    update?: string;
    restock?: string;
  };
}

interface ServerActionResponse {
  message?: string;
  error?: string;
}

export type { PageSearchParams, ServerActionResponse };
