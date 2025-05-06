
export class BasePage {
  constructor(page, path) {
    super(page, "https://petstore.octoperf.com" + path);
  }
}
