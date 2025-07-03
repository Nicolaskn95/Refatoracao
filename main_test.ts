// statement_test.ts
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { invoices, plays } from "./db.ts";
import { statement } from "./main.ts";

/**
 * Test case for a standard invoice.
 * This test verifies that the generated statement string matches the expected output exactly.
 */
Deno.test("generate statement for a standard invoice", () => {
  const invoice = invoices[0];
  const expectedStatement = "Statement for BigCo\n" +
    "  Hamlet: $650.00 (55 seats)\n" +
    "  Macbeth: $580.00 (35 seats)\n" +
    "  Othello: $500.00 (40 seats)\n" +
    "Amount owed is $1,730.00\n" +
    "You earned 47 credits\n";

  const result = statement(invoice, plays);
  assertEquals(result, expectedStatement);
});

/**
 * Test case for error handling.
 * This test ensures that the function correctly throws an error when it
 * encounters a play with an unknown type.
 */
Deno.test("throw an error for an unknown play type", () => {
  const invoiceWithUnknownType = {
    customer: "Test Customer",
    performances: [{ playID: "sci-fi-play", audience: 40 }],
  };
  const playsWithUnknownType = {
    ...plays,
    "sci-fi-play": { name: "Galaxy Quest", type: "sci-fi" },
  };

  // Assert that calling the function with this data throws an error
  assertThrows(
    () => {
      statement(invoiceWithUnknownType, playsWithUnknownType);
    },
    Error, // The expected error type
    "unknown type: sci-fi", // The expected error message
  );
});
