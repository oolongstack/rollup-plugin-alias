import { describe, it, expect } from "vitest";
import alias from ".";
describe("alias", () => {
  it("happy match alias", () => {
    const aliasObj: any = alias({
      entries: {
        "@": "src",
      },
    });
    expect(aliasObj.resolveId("@/utils/add.js")).toBe("src/utils/add.js");
  });
  it("happy match not alias", () => {
    const aliasObj: any = alias({
      entries: {
        "@": "src",
      },
    });
    expect(aliasObj.resolveId("./utils/add.js")).toBe("./utils/add.js");
  });
});
