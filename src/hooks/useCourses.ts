import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface DbCourse {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  overview: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  review_count: number;
  enrollment_count: number;
  price_usd: number;
  image_url: string | null;
  instructor: string;
  features: string[];
  published: boolean;
  learning_objectives: string[];
  modules: { title: string; description: string; imageKeyword: string }[];
  who_should_attend: string[];
  assessment: string;
  certification: string;
  faqs: { question: string; answer: string }[];
  reviews: { name: string; role: string; rating: number; comment: string }[];
  created_at: string;
  updated_at: string;
}

export function useCourses(publishedOnly = true) {
  return useQuery({
    queryKey: ["courses", publishedOnly],
    queryFn: async () => {
      let query = supabase.from("courses").select("*").order("created_at", { ascending: false });
      if (publishedOnly) {
        query = query.eq("published", true);
      }
      const { data, error } = await query;
      if (error) throw error;
      return (data ?? []) as unknown as DbCourse[];
    },
  });
}

export function useCourseBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data as unknown as DbCourse | null;
    },
    enabled: !!slug,
  });
}

export function useUpsertCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (course: Partial<DbCourse> & { id?: string }) => {
      const { id, created_at, updated_at, ...rest } = course as any;
      if (id) {
        const { error } = await supabase.from("courses").update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("courses").insert([rest]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course saved successfully");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}

export function useDeleteCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("courses").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      toast.success("Course deleted");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}

export const categories = ["Pilot Training", "Safety & Weather", "Drone Operations", "Maintenance"];
