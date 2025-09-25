import { betterAuth } from "better-auth";
import dotenv from 'dotenv';

dotenv.config();

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3001"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  advanced: {
    cookies: {
      sessionStorage: {
        attributes: {
          sameSite: "none",
          secure: true,
          partitioned: true,
        }
      }
    }
  }
});
