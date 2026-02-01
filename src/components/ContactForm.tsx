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
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      className="mt-28 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                className="bg-[#FFCC00] border-4 border-white text-[#131313] px-4 py-3 font-bold"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                Message sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                className="bg-red-600 border-4 border-white text-white px-4 py-3 font-bold"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <FormLabel className="text-white font-black ml-2 text-base uppercase">
                      What&apos;s your name?
                    </FormLabel>
                  </motion.div>
                  <FormControl>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        placeholder="Type name..."
                        {...field}
                        className="py-7 border-b-4 border-white bg-[#131313] text-white placeholder:text-gray-500 transition-all duration-300 focus:border-[#FFCC00] focus:shadow-lg"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <FormLabel className="text-white font-black ml-2 text-base uppercase">
                      What&apos;s your email address?
                    </FormLabel>
                  </motion.div>
                  <FormControl>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        placeholder="Type email address..."
                        {...field}
                        className="py-7 border-b-4 border-white bg-[#131313] text-white placeholder:text-gray-500 transition-all duration-300 focus:border-[#FFCC00] focus:shadow-lg"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <FormLabel className="text-white font-black ml-2 text-base uppercase">
                      What&apos;s your message?
                    </FormLabel>
                  </motion.div>
                  <FormControl className="mt-3">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Textarea
                        placeholder="Type your message..."
                        {...field}
                        className="border-b-4 border-white bg-[#131313] text-white placeholder:text-gray-500 h-60 transition-all duration-300 focus:border-[#FFCC00] focus:shadow-lg"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white border-4 border-white px-3 py-5 w-[181px] h-[50px] text-[#131313] text-[17px] font-black flex justify-evenly mt-14 transition-all duration-300 hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:shadow-xl disabled:opacity-50 cursor-pointer uppercase"
              >
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{
                    duration: 1,
                    repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.span>
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : {}}
                  transition={{
                    duration: 1,
                    repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/images/send.png"
                    alt="send icon"
                    width={40}
                    height={40}
                    priority
                  />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
