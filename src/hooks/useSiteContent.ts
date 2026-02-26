import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";

export function useSiteContent(page?: string) {
  return useQuery({
    queryKey: ["site_content", page],
    queryFn: async () => {
      let query = supabase.from("site_content").select("*");
      if (page) query = query.eq("page", page);
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useUpsertSiteContent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ page, section, content }: { page: string; section: string; content: Json }) => {
      const { error } = await supabase
        .from("site_content")
        .upsert({ page, section, content }, { onConflict: "page,section" });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast.success("Content saved");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}
