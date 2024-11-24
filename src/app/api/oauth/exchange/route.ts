import { nylas, nylasConfig } from "@/libs/nylas";
import { NextApiRequest } from "next";

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
    clientSectet: nylasConfig.apiKey,
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
    code,
  };

  const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);
  const { grantId, email } = response;
  //saves in RAM we will store it in cookie
  // You'll use this grantId to make API calls to Nylas perform actions on
  // behalf of this account. Store this in a database, associated with a user
  process.env.NYLAS_GRANT_ID = grantId;

  // This depends on implementation. If the browser is hitting this endpoint
  // you probably want to use res.redirect('/some-successful-frontend-url')
  res.json({
    message: "OAuth2 flow completed successfully for grant ID: " + grantId,
  });
}
