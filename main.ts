import { invoices, plays } from "./db.ts";

interface invoice {
  customer: string;
  performances: Array<{
    playID: string;
    audience: number;
  }>;
}

interface play {
  name: string;
  type: string;
}

export function statement(invoice: invoice, plays: Record<string, play>) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (const perf of invoice.performances) {
    const thisAmount = amountFor(perf, playsFor(perf)); // pass the play object instead of plays

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === playsFor(perf).type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    result += `  ${playsFor(perf).name}: ${
      format(thisAmount / 100)
    } (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;

  function playsFor(
    aPerfomance: { playID: string },
  ) {
    return plays[aPerfomance.playID];
  }

  function amountFor(
    aPerformance: { playID: string; audience: number },
    play: any,
  ): number {
    let result = 0;
    switch (playsFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playsFor(aPerformance).type}`);
    }

    return result;
  }
}

console.log(statement(invoices[0], plays));
