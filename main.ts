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
    const play = plays[perf.playID];
    const thisAmount = amountFor(perf, plays); // change the switch to a function call

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === play.type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    result += `  ${play.name}: ${
      format(thisAmount / 100)
    } (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;

  return result;
}

function amountFor(
  perf: { playID: string; audience: number },
  plays: Record<string, play>,
): number {
  const play = plays[perf.playID];
  let result = 0;

  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (perf.audience > 30) {
        result += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (perf.audience > 20) {
        result += 10000 + 500 * (perf.audience - 20);
      }
      result += 300 * perf.audience;
      break;
    default:
      throw new Error(`unknown type: ${play.type}`);
  }

  return result;
}

console.log(statement(invoices[0], plays));
