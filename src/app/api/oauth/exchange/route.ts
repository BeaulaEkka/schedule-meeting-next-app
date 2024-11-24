import { nylas, nylasConfig } from "@/libs/nylas";
import { session } from "@/libs/session";
import { NextApiRequest } from "next";

import { redirect } from "next/navigation";

export async function GET(req: NextApiRequest) {
  console.log("Received callback from Nylas");

  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json("No authorization code returned from Nylas", {
      status: 400,
    });
  }

  const codeExchangePayload = {
    clientSecet: nylasConfig.apiKey,
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
    code,
  };

  const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);
  const { grantId, email } = response;
  //saves in RAM we will store it in cookie
  // You'll use this grantId to make API calls to Nylas perform actions on
  // behalf of this account. Store this in a database, associated with a user
  // process.env.NYLAS_GRANT_ID = grantId;
  await session().set("grantId", grantId);
  await session().set("email", email);

  redirect("/");
}
