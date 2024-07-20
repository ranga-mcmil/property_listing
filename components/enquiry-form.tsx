
"use client";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useFormState, useFormStatus } from "react-dom";
import { createEnquiry } from "@/actions/create-enquiry";
import { toast } from "sonner"

export function EnquiryForm({
  listingId
}: {
  listingId: number
}) {

  const { pending } = useFormStatus();

  const onSubmit = async (formData: FormData) => {

    try {
        await createEnquiry(formData)
        toast.success(`Enquiry sent`)
    } catch (error: any) {
        toast.error(error)
    }
  }

  return (
    <form className="mt-4 space-y-4" action={onSubmit}>
      <Input placeholder="First Name" name="firstName" required />
      <Input placeholder="Last Name" name="lastName" required />
      <Input type="email" placeholder="Email" name="email" required />
      <Input placeholder="Country Code" name="dialingCode" required />
      <Input type="tel" placeholder="Phone Number" name="phoneNumber" required />
      <Textarea placeholder="Message" className="min-h-[100px]" name="message" required />
      <input hidden name="ownedBy" value="ranganaimukanhairi1@gmail.com"/>
      <input hidden name="listingId" value={listingId} />


      <Button className="w-full bg-red-500 text-white">Send Message</Button>
    </form>

)
}
