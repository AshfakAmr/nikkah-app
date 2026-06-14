import { api } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type {
  LoginPayload,
  LoginResponse,
  RegisterStepOnePayload,
  RegisterStepOneResponse,
} from "@/features/auth/types/auth-form";

const USE_MOCK_AUTH = process.env.NEXT_PUBLIC_USE_MOCK_AUTH !== "false";

/**
 * Authenticates a member.
 *
 * TODO: Set `NEXT_PUBLIC_USE_MOCK_AUTH=false` when the auth API is ready.
 */
export async function loginMember(payload: LoginPayload): Promise<LoginResponse> {
  if (USE_MOCK_AUTH) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      message: "Signed in successfully (mock response).",
    };
  }

  return api.post<LoginResponse>(endpoints.auth.login, payload);
}

/**
 * Saves registration step one identity details.
 *
 * TODO: Wire to backend registration flow when available.
 */
export async function submitRegisterStepOne(
  payload: RegisterStepOnePayload,
): Promise<RegisterStepOneResponse> {
  if (USE_MOCK_AUTH) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return {
      registrationId: `mock-registration-${Date.now()}`,
      nextStep: 2,
      message: "Step 1 saved (mock response).",
    };
  }

  return api.post<RegisterStepOneResponse>(endpoints.auth.register, payload);
}
