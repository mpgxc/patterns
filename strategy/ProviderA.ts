import { IProvider } from "./IProvider";

class ProviderA implements IProvider {
  public process(data: string[]): string[] {
    return data.reverse();
  }
}

export { ProviderA };
