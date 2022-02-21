import { IProvider } from "./IProvider";
import { ProviderB } from "./ProviderB";
import { ProviderA } from "./ProviderA";

class Handler {
  private constructor(private provider: IProvider) {}

  add(provider: IProvider) {
    this.provider = provider;
  }

  handle(): void {
    console.log("Handler: Rodando o provider!");

    const result = this.provider.process(["a", "b", "c", "d", "e"]);

    console.log(result.join(","));
  }

  static build(provider: IProvider) {
    return new this(provider);
  }
}

const handler = Handler.build(new ProviderA());

console.log("[ProviderA]");
handler.handle();

console.log(" - ".repeat(15));

console.log("[ProviderB]");
handler.add(new ProviderB());
handler.handle();
