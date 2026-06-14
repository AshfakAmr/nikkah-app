export const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
  },
  profiles: {
    list: "/profiles",
    featured: "/profiles/featured",
    detail: (id: string) => `/profiles/${id}`,
    search: "/profiles/search",
  },
  contact: {
    submit: "/contact/inquiries",
  },
  newsletter: {
    subscribe: "/newsletter/subscribe",
  },
  faq: {
    list: "/faq",
  },
} as const;

export type EndpointPath =
  | (typeof endpoints.auth)[keyof typeof endpoints.auth]
  | (typeof endpoints.profiles)[keyof typeof endpoints.profiles]
  | (typeof endpoints.contact)[keyof typeof endpoints.contact]
  | (typeof endpoints.newsletter)[keyof typeof endpoints.newsletter]
  | (typeof endpoints.faq)[keyof typeof endpoints.faq]
  | ReturnType<typeof endpoints.profiles.detail>;
