export type ApiErrorCode =
  | "NETWORK_ERROR"
  | "TIMEOUT"
  | "PARSE_ERROR"
  | "HTTP_ERROR"
  | "UNKNOWN";

export type ApiErrorDetails = Record<string, unknown>;

export class ApiError extends Error {
  readonly status: number;
  readonly code: ApiErrorCode;
  readonly details?: ApiErrorDetails;

  constructor(
    message: string,
    options: {
      status?: number;
      code?: ApiErrorCode;
      details?: ApiErrorDetails;
      cause?: unknown;
    } = {},
  ) {
    super(message, { cause: options.cause });
    this.name = "ApiError";
    this.status = options.status ?? 0;
    this.code = options.code ?? "UNKNOWN";
    this.details = options.details;
  }

  static isApiError(error: unknown): error is ApiError {
    return error instanceof ApiError;
  }

  static fromResponse(
    status: number,
    body: unknown,
    fallbackMessage = "Request failed",
  ): ApiError {
    const message =
      typeof body === "object" &&
      body !== null &&
      "message" in body &&
      typeof (body as { message: unknown }).message === "string"
        ? (body as { message: string }).message
        : fallbackMessage;

    return new ApiError(message, {
      status,
      code: "HTTP_ERROR",
      details: typeof body === "object" && body !== null ? (body as ApiErrorDetails) : undefined,
    });
  }
}
