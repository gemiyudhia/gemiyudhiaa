"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-28 max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {submitStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Failed to send message. Please try again.
            </div>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What&apos;s your name?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type name..."
                    {...field}
                    className="py-7 border-b border-[#212021]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What&apos;s your email address?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type email address..."
                    {...field}
                    className="py-7 border-b border-[#212021]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#212021] font-bold ml-2 text-base">
                  What&apos;s your message?
                </FormLabel>
                <FormControl className="mt-3">
                  <Textarea
                    placeholder="Type your message..."
                    {...field}
                    className="border-b border-[#212021] h-60"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0838FF] rounded-[17px] px-3 py-5 w-[181px] h-[50px] text-white text-[17px] font-bold flex justify-evenly mt-14"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Image
              src="/images/send.png"
              alt="send icon"
              width={40}
              height={40}
              priority
            />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
