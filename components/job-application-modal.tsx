"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

export function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle,
  jobId,
}: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const cover_letter = formData.get("coverLetter") as string;

    if (jobTitle && jobId) {
      emailjs.init({
        publicKey: "awugJzbSuj8lHQXlU",
      });

      emailjs
        .send("service_j2cxn4y", "template_5lk4zxi", {
          job_name: jobTitle,
          job_id: jobId,
          cover_letter: cover_letter,
          to_name: "Bamhire Admin",
          from_name: "Bamhire",
          user_name: ((formData.get("firstName") as string) +
            " " +
            formData.get("lastName")) as string,
        })
        .then(
          () => {
            toast({
              title: "Success",
              description: "Job applied successfully",
            });
          },
          (error) => {
            console.log(error, "FAILED...", error.text);
          }
        );
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Application submitted successfully!");
      onClose();
    } catch (error) {
      alert("Error submitting application. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-[#004589]">Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-[#004589]">
            Please fill out the form below to apply for this position.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#004589]">First Name</Label>
              <Input id="firstName" name="firstName" required placeholder="John" className="text-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#004589]">Last Name</Label>
              <Input id="lastName" name="lastName" required placeholder="Doe" className="text-black" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#004589]">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" className="text-black" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#004589]">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" className="text-black" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-[#004589]">Resume/CV</Label>
            <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="text-black" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-[#004589]">Cover Letter</Label>
            <Textarea id="coverLetter" name="coverLetter" placeholder="Tell us why you're interested in this position..." className="min-h-[100px] " />
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose} className="text-[#004589] hover:bg-[#15293d]">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-[#004589] hover:bg-[#15293d] text-white">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
