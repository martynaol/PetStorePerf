import http from "k6/http";
import { check, sleep } from "k6";
import { Options } from "k6/options";
import generateRandomEmailAndUsername from "../../utils/data.generator.utils";

export const options: Options = {
  vus: 2,
  iterations: 5,
};

function healthCheck(): void {
  const res = http.get("https://petstore.octoperf.com/");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "is response time < 200ms": (r) => r.timings.duration < 200,
  });

  sleep(1);
}

function register(): void {
  const url = "https://petstore.octoperf.com/actions/Account.action";
  const [username, email] = generateRandomEmailAndUsername();

  const payload: Record<string, string> = {
    username,
    password: "P@ssword1",
    repeatedPassword: "P@ssword1",
    "account.email": email,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const res = http.post(url, payload, { headers });
  check(res, {
    "is status 200": (r) => r.status === 200,
    "is response time < 400ms": (r) => r.timings.duration < 400,
  });

  sleep(3);
}

export default function (): void {
  healthCheck();
  register();
}
