/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useUpdateProfileMutation,
  useUserInfoQuery,
} from "@/components/redux/Features/Auth/auth.api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const [updateUserProfile, { isLoading }] = useUpdateProfileMutation();
  const { data } = useUserInfoQuery(undefined);
  const navigate = useNavigate();

  const updateProfileSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Enter a valid phone number"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .optional()
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
    },
  });

  useEffect(() => {
    if (data?.data) {
      form.reset({
        name: data.data.name || "",
        phone: data.data.phone || "",
        password: "",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: z.infer<typeof updateProfileSchema>) => {
    try {
      const res = await updateUserProfile(values);

      if ("data" in res && res.data?.success) {
        toast.success(res.data.message || "Profile updated successfully ✨");
        navigate("/rider/profile");
      }

      // handle backend error
      if ("error" in res) {
        const message = "Something went wrong on the update Profile!";
        toast.error(message);
      }
    } catch (error: any) {
      toast.error("Network error or something unexpected happened");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center ">
            Update Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        value={field.value || ""}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="017*****"
                        {...field}
                        value={field.value || ""}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        value={field.value || ""}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Button */}
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full rounded-xl transition-all duration-200"
              >
                {isLoading ? "Saving Changes..." : " Save Changes"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProfile;
