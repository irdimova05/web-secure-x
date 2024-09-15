"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Form() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url" className="text-gray-300">
          URL адрес
        </Label>
        <Input
          id="url"
          placeholder="https://example.com/api/query"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="headers" className="text-gray-300">
          Хедъри (Token/Cookie за автентикация)
        </Label>
        <Textarea
          id="headers"
          placeholder="Authorization: Bearer your_token_here&#10;Cookie: session=your_session_cookie"
          className="bg-gray-700 text-white border-gray-600 min-h-[100px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inputSelector" className="text-gray-300">
          Селектор на входното поле
        </Label>
        <Input
          id="inputSelector"
          placeholder="#search-input"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
    </form>
  );
}
