const translate = require("./translate");

describe("testing vowels", () => {
  test("apple returns appleway", () => {
    expect(translate("apple")).toEqual("appleway");
  });
  test("elephant returns elephantway", () => {
    expect(translate("elephant")).toEqual("elephantway");
  });
  test("ink returns inkway", () => {
    expect(translate("ink")).toEqual("inkway");
  });
  test("out returns outway", () => {
    expect(translate("out")).toEqual("outway");
  });
  test("ubahn returns ubahnway", () => {
    expect(translate("out")).toEqual("outway");
  });
});

describe("testing consonants", () => {
  test("cookie returns ookiecay", () => {
    expect(translate("cookie")).toEqual("ookiecay");
  });
  test("blue returns ueblay", () => {
    expect(translate("blue")).toEqual("ueblay");
  });
  test("trains returns ainstray", () => {
    expect(translate("trains")).toEqual("ainstray");
  });
  test("spring returns ingspray", () => {
    expect(translate("trains")).toEqual("ainstray");
  });
  test("cyclone returns onecyclay", () => {
    expect(translate("cyclone")).toEqual("onecyclay");
  });
});

describe("testing setCase", () => {
  test("Cookie returns ookiecay", () => {
    expect(translate("Cookie")).toEqual("ookiecay");
  });
  test("Blue returns ueblay", () => {
    expect(translate("Blue")).toEqual("ueblay");
  });
  test("Trains returns ainstray", () => {
    expect(translate("Trains")).toEqual("ainstray");
  });
  test("Apple returns appleway", () => {
    expect(translate("Apple")).toEqual("appleway");
  });
  test("Elephant returns elephantway", () => {
    expect(translate("Elephant")).toEqual("elephantway");
  });
});
