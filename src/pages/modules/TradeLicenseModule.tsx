
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const TradeLicenseModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <FileText className="h-6 w-6 mr-2 text-solo-purple" />
            Trade License Management
          </h1>
          <p className="text-solo-gray mt-1">Manage your business licenses and applications</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Trade License Module</CardTitle>
            <CardDescription>This module will be implemented in a future update</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-solo-gray">The Trade License module will handle your business permissions and applications.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TradeLicenseModule;
