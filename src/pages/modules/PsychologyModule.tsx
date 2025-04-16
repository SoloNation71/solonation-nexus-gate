
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

const PsychologyModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <Brain className="h-6 w-6 mr-2 text-solo-purple" />
            Psychology Tier Assessment
          </h1>
          <p className="text-solo-gray mt-1">Track your behavior-based tiering and assessments</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Psychology Tier Module</CardTitle>
            <CardDescription>This module will be implemented in a future update</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-solo-gray">The Psychology Tier module will track your behavior-based tiering system.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PsychologyModule;
