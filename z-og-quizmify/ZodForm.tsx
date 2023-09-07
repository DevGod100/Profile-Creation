"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { profileSchema } from "@/lib/zod-stuff"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../components/ui/button"

type Input = z.infer<typeof profileSchema>

const CreateProfileForm = () => {
    const form = useForm<Input>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
          name: "",
          email: "",
          image: "",
        },
    })

    // console.log(form.watch());
    
    async function onSubmit (form: Input) {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    image: form.image,
                }),
              });
          
              if ((response).ok) {
                // Profile created successfully
                alert(JSON.stringify(response, null, 4)) ;
                console.log(response);
              } else {
                // Handle error
                console.log(Error);
              }
    }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Register and start your journey!</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 relative overflow-x-hidden px-2">
        <div>
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input  placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


       <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="Upload Image" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      </div >

        <Button type="submit"> Submit</Button>
  </form>
    </Form>
      </CardContent>
     
    </Card>
    </div>
  )
}

export default CreateProfileForm