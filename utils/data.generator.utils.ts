interface EmailOptions {
  username?: string;
  domain?: string;
}

export default function generateRandomEmailAndUsername(
  options?: EmailOptions
): [string, string] {
  const username = options?.username || "test";
  const domain = options?.domain || "example.com";
  const salt = Date.now();
  const email = `${username}-${salt}@${domain}`;
  return [username, email];
}
