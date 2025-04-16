
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const GrantsModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-solo-purple" />
            Grant Applications
          </h1>
          <p className="text-solo-gray mt-1">Track your funding opportunities and applications</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Grants Module</CardTitle>
            <CardDescription>This module will be implemented in a future update</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-solo-gray">The Grants module will track internal and external funding applications.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GrantsModule;
