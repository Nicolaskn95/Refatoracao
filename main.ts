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

interface IStatementData {
  customer: string;
  performances: Array<{
    playID: string;
    audience: number;
  }>;
}

export function statement(invoices: invoice, plays: Record<string, play>) {
  const statementData: IStatementData = {
    customer: invoices.customer,
    performances: invoices.performances
  };
  return renderPlainText(statementData, plays);
}

function renderPlainText(data: IStatementData, plays: Record<string, play>) {

  let result = `Statement for ${data.customer}\n`;

  for (const perf of data.performances) {
    result += `  ${playsFor(perf).name}: ${
      usd(amountFor(perf) / 100)
    } (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(totalAmount() / 100)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;

  return result;

  function totalAmount() {
    let result = 0;
    for (const perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (const perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function volumeCreditsFor(
    aPerfomance: { audience: number; playID: string },
  ) {
    let result = Math.max(aPerfomance.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === playsFor(aPerfomance).type) {
      result += Math.floor(aPerfomance.audience / 5);
    }
    return result;
  }

  function usd(aNumber: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
  }

  function playsFor(
    aPerfomance: { playID: string },
  ) {
    return plays[aPerfomance.playID];
  }

  function amountFor(
    aPerformance: { playID: string; audience: number },
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
