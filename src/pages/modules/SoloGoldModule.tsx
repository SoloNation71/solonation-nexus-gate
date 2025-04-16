
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const SoloGoldModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <CreditCard className="h-6 w-6 mr-2 text-solo-purple" />
            SoloGold Vault
          </h1>
          <p className="text-solo-gray mt-1">Manage your digital assets and gold certificates</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>SoloGold Module</CardTitle>
            <CardDescription>This module will be implemented in a future update</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-solo-gray">The SoloGold Vault will manage your digital token and NFT gold certificate tracking.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SoloGoldModule;
