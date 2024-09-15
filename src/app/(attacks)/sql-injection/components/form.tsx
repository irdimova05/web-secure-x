"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SQLInjectionSchema } from "../models/sql-injection-schema.model";
import { AttackSubmitButton } from "@/components/form/attack-submit-button";

export function SQLInjectionForm() {
  const form = useForm<SQLInjectionSchema>({
    resolver: zodResolver(SQLInjectionSchema),
    defaultValues: {
      url: "",
      headers: "",
      fieldSelector: "",
      submitButtonSelector: "",
    },
  });

  const handleSubmit = (values: SQLInjectionSchema) => {
    // Here you would handle the form submission
    console.log("Form submitted");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">URL адрес</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/login"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="headers"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Хедъри (Token/Cookie за автентикация)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Authorization: Bearer your_token_here&#10;Cookie: session=your_session_cookie"
                  className="bg-gray-700 text-white border-gray-600 min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fieldSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на входното поле
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#search-input"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="submitButtonSelector"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-gray-300">
                Селектор на "submit" бутон
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="#button"
                  className="bg-gray-700 text-white border-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <AttackSubmitButton />
        </div>
      </form>
    </Form>
  );
}
