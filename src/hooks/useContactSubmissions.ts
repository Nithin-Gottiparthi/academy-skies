import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function useContactSubmissions() {
  return useQuery({
    queryKey: ["contact_submissions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (submission: {
      name: string;
      email: string;
      phone?: string;
      course_interest?: string;
      message?: string;
    }) => {
      const { error } = await supabase.from("contact_submissions").insert(submission);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you shortly.");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}

export function useMarkSubmissionRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, read }: { id: string; read: boolean }) => {
      const { error } = await supabase.from("contact_submissions").update({ read }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact_submissions"] });
    },
  });
}

export function useDeleteSubmission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact_submissions"] });
      toast.success("Submission deleted");
    },
  });
}
