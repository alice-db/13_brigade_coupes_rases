import { AppLayout } from "@/shared/components/AppLayout";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_administration")({
  beforeLoad: async ({ context, location }) => {
    if (!context?.auth?.isAdmin) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
