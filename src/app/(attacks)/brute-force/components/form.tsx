"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
          placeholder="https://example.com/login"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username" className="text-gray-300">
          Потребителско име/имейл
        </Label>
        <Input
          id="username"
          placeholder="admin@example.com"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="usernameSelector" className="text-gray-300">
          Селектор на полето за потребителско име/имейл
        </Label>
        <Input
          id="usernameSelector"
          placeholder="#username"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="passwordSelector" className="text-gray-300">
          Селектор на полето за парола
        </Label>
        <Input
          id="passwordSelector"
          placeholder="#password"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="loginButtonSelector" className="text-gray-300">
          Селектор на бутона за вход
        </Label>
        <Input
          id="loginButtonSelector"
          placeholder="#login-button"
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
    </form>
  );
}
