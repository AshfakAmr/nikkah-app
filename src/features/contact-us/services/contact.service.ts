import { api } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import type {
  ContactInquiryPayload,
  ContactInquiryResponse,
} from "@/features/contact-us/types/contact-form";

const USE_MOCK_CONTACT_SUBMISSION =
  process.env.NEXT_PUBLIC_USE_MOCK_CONTACT_SUBMISSION !== "false";

/**
 * Submits a contact inquiry to the backend.
 *
 * TODO: Set `NEXT_PUBLIC_USE_MOCK_CONTACT_SUBMISSION=false` when the API is ready.
 */
export async function submitContactInquiry(
  payload: ContactInquiryPayload,
): Promise<ContactInquiryResponse> {
  if (USE_MOCK_CONTACT_SUBMISSION) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      id: `mock-inquiry-${Date.now()}`,
      message: "Your inquiry has been queued for review (mock response).",
    };
  }

  return api.post<ContactInquiryResponse>(endpoints.contact.submit, payload);
}
