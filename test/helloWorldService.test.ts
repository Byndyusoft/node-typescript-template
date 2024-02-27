/*
 * Copyright 2021 Byndyusoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HelloWorldService } from "../src";

describe("HelloWorldService", () => {
  let helloWorldService: HelloWorldService;

  beforeEach(() => {
    helloWorldService = new HelloWorldService();
  });

  it("must return hello world message", async () => {
    allure.epic("SOME EPIC");
    allure.issue("Issue Name", "352");
    allure.tms("Task Name", "352");
    allure.link("352", "Link name", "custom");

    await allure.step("step 1", (step) => {
      step.description("step description");

      expect(1).toStrictEqual(1);

      step.step("step 1.1", () => {});
    });

    await allure.step("step 2", function (step) {
      step.description("check refrence step");

      expect(this === step).toBeTrue();
    });

    expect(helloWorldService.getHelloWorldMessage()).toEqualCaseInsensitive(
      "hello world!",
    );
  });
});
