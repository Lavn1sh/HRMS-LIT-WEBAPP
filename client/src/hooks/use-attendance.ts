import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type CreateAttendanceRequest } from "@shared/routes";

export function useAttendance() {
  return useQuery({
    queryKey: [api.attendance.list.path],
    queryFn: async () => {
      const res = await fetch(api.attendance.list.path);
      if (!res.ok) throw new Error("Failed to fetch attendance records");
      return api.attendance.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateAttendanceRequest) => {
      // Coerce date string to Date object if needed
      const payload = {
        ...data,
        date: new Date(data.date),
      };
      
      const validated = api.attendance.create.input.parse(payload);
      const res = await fetch(api.attendance.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.attendance.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to mark attendance");
      }
      return api.attendance.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.attendance.list.path] });
    },
  });
}
