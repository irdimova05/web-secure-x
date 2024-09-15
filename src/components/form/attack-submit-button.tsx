"use client";

import { Button } from "@/components/ui/button";

export function AttackSubmitButton() {
  return (
    <Button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Започни Атаката
    </Button>
  );
}
