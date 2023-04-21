import { expect, describe, it } from "vitest";
import {
  Item,
  Basic,
  Legendary,
  Conjured,
  Ticket,
  Aged,
  items,
  updateQuality,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("Sulfaras, Hand of Ragnaros", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });

  describe("updateQuality", () => {
    it("Aged Brie sellIn > 0", () => {
      const testItem = new Aged("Aged Brie", 2, 0);
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(1);
      expect(testItem.sellIn).toBe(1);
    });
  });

  describe("updateQuality", () => {
    it("Aged Brie sellIn < 0", () => {
      const testItem = new Aged("Aged Brie", -1, 5);
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(7);
      expect(testItem.sellIn).toBe(-2);
    });
  });

  describe("updateQuality", () => {
    it("Aged Brie sellIn < 0 quality already 50", () => {
      const testItem = new Aged("Aged Brie", -1, 50);
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(50);
      expect(testItem.sellIn).toBe(-2);
    });
  });

  describe("updateQuality", () => {
    it("Concert Tickets sellIn < 0", () => {
      const testItem = new Ticket(
        "Backstage passes to a TAFKAL80ETC concert",
        -1,
        20
      );
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(-2);
    });
  });

  describe("updateQuality", () => {
    it("Concert Tickets sellIn < 5", () => {
      const testItem = new Ticket(
        "Backstage passes to a TAFKAL80ETC concert",
        4,
        20
      );
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(23);
      expect(testItem.sellIn).toBe(3);
    });
  });

  describe("updateQuality", () => {
    it("Concert Tickets sellIn > 5 <= 10", () => {
      const testItem = new Ticket(
        "Backstage passes to a TAFKAL80ETC concert",
        8,
        20
      );
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(22);
      expect(testItem.sellIn).toBe(7);
    });
  });

  describe("updateQuality", () => {
    it("Concert Tickets sellIn > 10", () => {
      const testItem = new Ticket(
        "Backstage passes to a TAFKAL80ETC concert",
        15,
        20
      );
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(21);
      expect(testItem.sellIn).toBe(14);
    });
  });

  describe("updateQuality", () => {
    it("Conjured item", () => {
      const testItem = new Conjured("Conjured Mana Cake", 3, 6);
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(4);
      expect(testItem.sellIn).toBe(2);
    });
  });

  describe("updateQuality", () => {
    it("Test for negative quality", () => {
      const testItem = new Basic("basic", 5, 0);
      items.push(testItem);

      updateQuality();

      expect(testItem.quality).toBe(0);
      expect(testItem.sellIn).toBe(4);
    });
  });
});
