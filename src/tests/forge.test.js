// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2025 AETHERFORGE Contributors

import { forgeWorld } from "../packages/aether-core/index.ts";

test("forges a default world", async () => {
  const world = await forgeWorld("a blank realm");
  expect(world).toHaveProperty("terrain");
  expect(world).toHaveProperty("physics");
});
