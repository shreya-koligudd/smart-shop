import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const LoadingSkeleton = () => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-square bg-muted animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
      <CardContent className="p-4">
        <div className="h-4 bg-muted rounded w-1/3 mb-2 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
        <div className="h-6 bg-muted rounded w-full mb-2 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
        <div className="h-4 bg-muted rounded w-2/3 mb-2 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
        <div className="h-8 bg-muted rounded w-1/4 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="h-10 bg-muted rounded w-full animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
      </CardFooter>
    </Card>
  );
};
