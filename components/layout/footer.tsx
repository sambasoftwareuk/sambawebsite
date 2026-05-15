import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Samba Website. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, and a focus on outcomes.</p>
      </Container>
    </footer>
  );
}
