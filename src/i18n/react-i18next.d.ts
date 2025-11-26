import type { resources } from "./index";

declare module "react-i18next" {
  type DefaultResources = (typeof resources)["en"];

  interface CustomTypeOptions {
    resources: DefaultResources;
  }
}
