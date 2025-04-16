
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, Shield, Clock, CheckCircle, RefreshCw, Camera, Upload, QrCode } from "lucide-react";

const SoloIDModule = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold flex items-center">
              <Fingerprint className="h-6 w-6 mr-2 text-solo-purple" />
              SoloID Management
            </h1>
            <p className="text-solo-gray mt-1">Manage your sovereign digital identity</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
            <Button size="sm" variant="outline" className="border-solo-purple text-solo-purple">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Verification
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid grid-cols-4 w-full md:w-96">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Identity Status</CardTitle>
                  <CardDescription>Current verification status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center p-4">
                    <div className="w-24 h-24 rounded-full bg-green-500 bg-opacity-10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Verified</h3>
                    <p className="text-solo-gray text-sm mt-1">Level 3 Enhanced</p>
                    <div className="w-full mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-solo-gray">Verification score</span>
                        <span>97/100</span>
                      </div>
                      <Progress value={97} className="h-1.5 bg-solo-gray-dark" indicatorClassName="bg-gradient-to-r from-green-500 to-solo-blue" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Verification Methods</CardTitle>
                  <CardDescription>Update your SoloID</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                      <QrCode className="h-8 w-8 mb-2 text-solo-purple" />
                      <span className="text-xs">QR Scan</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                      <Upload className="h-8 w-8 mb-2 text-solo-purple" />
                      <span className="text-xs">Upload</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center justify-center p-4 h-24">
                      <Camera className="h-8 w-8 mb-2 text-solo-purple" />
                      <span className="text-xs">Capture</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Verification Timeline</CardTitle>
                  <CardDescription>Recent activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Verification Renewed</p>
                        <p className="text-xs text-solo-gray">Apr 12, 2025 - 09:23 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                        <Shield className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Enhanced Security Added</p>
                        <p className="text-xs text-solo-gray">Mar 28, 2025 - 02:45 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center mt-0.5">
                        <Clock className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Renewal Reminder Sent</p>
                        <p className="text-xs text-solo-gray">Mar 15, 2025 - 10:12 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">SoloID Credentials</CardTitle>
                <CardDescription>Your digital identity information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Member ID</h4>
                      <p className="font-mono bg-solo-gray-dark bg-opacity-30 p-2 rounded text-sm">SN-A8922-45TH-78BQ</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Verification Key</h4>
                      <p className="font-mono bg-solo-gray-dark bg-opacity-30 p-2 rounded text-sm">
                        f87d2a5e9b1c3...d4e2f9
                        <Button variant="ghost" size="sm" className="ml-2 h-6 w-6 p-0">
                          <RefreshCw className="h-3 w-3" />
                        </Button>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Tier Access Level</h4>
                      <p className="font-medium">Sovereign (Level 4)</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Last Verification</h4>
                      <p className="font-medium">April 12, 2025 09:23 AM</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Next Required Verification</h4>
                      <p className="font-medium">July 12, 2025 (81 days remaining)</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-solo-gray mb-1">Security Rating</h4>
                      <div className="flex items-center">
                        <p className="font-medium mr-2">A+</p>
                        <Progress value={97} className="h-1.5 w-24 bg-solo-gray-dark" indicatorClassName="bg-gradient-to-r from-green-500 to-solo-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Security Settings</CardTitle>
                <CardDescription>Manage your SoloID security features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-solo-gray text-sm mb-4">This section will contain security settings for your SoloID.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Verification History</CardTitle>
                <CardDescription>Complete record of ID verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-solo-gray text-sm mb-4">This section will contain your verification history.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">SoloID Settings</CardTitle>
                <CardDescription>Configure your identity preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-solo-gray text-sm mb-4">This section will contain settings for your SoloID.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SoloIDModule;
