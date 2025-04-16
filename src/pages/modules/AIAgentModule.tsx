
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const AIAgentModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <Bot className="h-6 w-6 mr-2 text-solo-purple" />
            AI Agent Portal
          </h1>
          <p className="text-solo-gray mt-1">Access AI tools and services for your Solo Nation activities</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>AI Agent Module</CardTitle>
            <CardDescription>This module will be implemented in a future update</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-solo-gray">The AI Agent Portal will provide access to AI CFO tools and other AI services.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AIAgentModule;
