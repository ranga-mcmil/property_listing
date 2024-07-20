
"use client";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useFormState, useFormStatus } from "react-dom";
import { createEnquiry } from "@/actions/create-enquiry";

export function EnquiryForm({
  listingId
}: {
  listingId: number
}) {

  const { pending } = useFormStatus();

  const onSubmit = async (formData: FormData) => {

    try {
        await createEnquiry(formData)
        toast.success(`Article Added.`)
    } catch (error: any) {
        toast.error(error)
    }
  }

  return (
    <form className="mt-4 space-y-4" action={onSubmit}>
      <Input placeholder="First Name" name="firstName" />
      <Input placeholder="Last Name" name="lastName" />
      <Input type="email" placeholder="Email" name="email" />
      <Input placeholder="Country Code" name="dialingCode" />
      <Input type="tel" placeholder="Phone Number" name="phoneNumber" />
      <Textarea placeholder="Message" className="min-h-[100px]" name="message" />
      <Input hidden={true} name="ownedBy" value="ranganaimukanhairi1@gmail.com"/>
      <Input hidden={true} name="listingId" value={listingId} />


      <Button className="w-full">Send Message</Button>
    </form>

)
}
