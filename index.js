
import { CognitoJwtVerifier } from "aws-jwt-verify";

// https://github.com/awslabs/aws-jwt-verify#cognitojwtverifier-verify-parameters

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenUse: "id",
  clientId: process.env.COGNITO_WEB_CLIENT_ID,
});

try {
  const payload = await verifier.verify(process.env.COGNITO_ID_TOKEN);
  console.log(JSON.stringify(payload));
} catch {
  console.log("Token not valid!");
}


