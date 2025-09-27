// NextAuth API Route
// Handles authentication requests (sign in, sign out, callback, etc.)
// Uses the configuration defined in lib/authOptions.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";
//import { authOptions } from "../../../lib/authOptions";

export default NextAuth(authOptions);
