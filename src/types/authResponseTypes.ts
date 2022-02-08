import { UserInfo } from 'firebase/auth';

type VerificationResponse = {
  status: string;
  user: UserInfo | null;
};

type CsrfResponse = {
  csrfToken: string;
};

export type { VerificationResponse, CsrfResponse };
