"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    emailjs.init({
      publicKey: "awugJzbSuj8lHQXlU",
    });

    const formData = new FormData(e.currentTarget);

    const templateParams = {
      user_name: firstName,
      message: message,
      form_email: formData.get("email") as string,
      from_name: "BamHire",
    };

    emailjs.send("service_j2cxn4y", "template_wgl0n0p", templateParams).then(
      (response) => {
        toast({
          title: "EMAIL SENT",
          description: `${response.status} ${response.text}`,
        });
      },
      (error) => {
        toast({
          title: "ERROR",
          description: `${error.status} ${error.text}`,
        });
      }
    );
  };

  return (
    <div className="min-h-screen bg-earth-to-sky">
      <main className="container mx-auto py-16 bg-white/90 rounded-lg shadow-lg px-20 box-border">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-[#a25f35] mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    name="first-name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <Input id="last-name" name="last-name" required />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#a25f35] text-white hover:bg-[#9e7a52]"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="lg:pl-12 flex items-center justify-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#a25f35]" />
                  <div>
                    <h3 className="font-semibold text-[#a25f35]">Address</h3>
                    <p className="text-sm text-gray-600">
                      123 BAM Hire Street, City, State 12345
                    </p>
                  </div>
                </CardContent>
              </Card> */}
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#a25f35]" />
                  <div>
                    <h3 className="font-semibold text-[#a25f35]">Phone</h3>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#a25f35]" />
                  <div>
                    <h3 className="font-semibold text-[#a25f35]">Email</h3>
                    <p className="text-sm text-gray-600">contact@BAM Hire.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#a25f35]" />
                  <div>
                    <h3 className="font-semibold text-[#a25f35]">
                      Business Hours
                    </h3>
                    <p className="text-sm text-gray-600">Mon-Fri: 9AM - 5PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
