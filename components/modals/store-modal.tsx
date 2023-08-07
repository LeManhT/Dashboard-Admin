"use client";
import * as z from "zod";
import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1).max(50),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <>
      <Modal
        title="Create Your Store"
        description="You must create your own space"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your store name" {...field} />
                    </FormControl>
                    <FormDescription className="py-1">
                      Type to set the name for your store
                    </FormDescription>
                    <FormMessage className="pb-2" />
                  </FormItem>
                )}
              ></FormField>
              <div className="flex space-x-2 justify-end">
                <Button type="submit">Submit</Button>
                <Button variant={"outline"} onClick={storeModal.onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};
