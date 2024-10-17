import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { vollkorn } from "@/styles/fonts";

interface BorderBeamCardProps {
  title: string;
  content: string;
}

export default function BorderBeamCard({
  title,
  content,
}: BorderBeamCardProps) {
  return (
    <div className="relative max-w-3xl h-[300px] mx-auto mb-12 p-12 flex justify-center">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[length:53%_53%,53%_53%,0%_0%,0%_0%] bg-[position:0_0,100%_0,100%_100%,0_100%] bg-no-repeat bg-[linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#d1d5db_45%,#9ca3af_50%,#ffffff_55%,transparent_60%)] dark:bg-[linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%),linear-gradient(45deg,transparent_40%,#6b7280_45%,#6b7280_55%,transparent_60%)] will-change-transform"></div>
      </div>

      {/* Card content */}
      <Card className="absolute inset-[1.1px] shadow-md overflow-hidden bg-white dark:bg-card p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
        <CardHeader className="bg-white dark:bg-card">
          <CardTitle
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          <p>{content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
