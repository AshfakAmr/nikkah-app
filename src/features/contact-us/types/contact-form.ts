export type ContactInquiryFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactInquiryFormField = keyof ContactInquiryFormValues;

export type ContactInquiryFormErrors = Partial<
  Record<ContactInquiryFormField, string>
>;

export const emptyContactInquiryForm: ContactInquiryFormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export type ContactInquiryPayload = ContactInquiryFormValues;

export type ContactInquiryResponse = {
  id: string;
  message: string;
};
