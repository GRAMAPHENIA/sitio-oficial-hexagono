import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ServiceLink } from "@/types/services";
import Link from "next/link";
interface ServiceCardProps {
  service: ServiceLink;
  icon: React.ElementType; // Añadimos un prop para pasar el ícono
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, icon: Icon }) => {
  return (
    <Link href={service.href}>
      <Card className="rounded-md">
        <CardHeader className="flex flex-col justify-center items-center ">
          <Icon className="w-6 h-6 text-blue-500" />
          <div className="flex justify-center items-center space-x-4">
            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
