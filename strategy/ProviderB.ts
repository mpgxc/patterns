import { IProvider } from "./IProvider";

class ProviderB implements IProvider {
  public process(data: string[]): string[] {
    return data.sort();
  }
}

export { ProviderB };
