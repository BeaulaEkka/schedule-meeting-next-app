import { nylas, nylasConfig } from "@/libs/nylas";
import { redirect } from "next/dist/server/api-utils";
export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId, // Note this is *different* from your API key. Make sure to put these in environment variables
    redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
  });
  return redirect(autUrl)
}
