
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Fingerprint, 
  CreditCard, 
  FileText, 
  Briefcase, 
  Brain, 
  Bot, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Welcome to Solo Nation</h1>
          <p className="text-solo-gray mt-1">Your sovereign digital dashboard</p>
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-solo-gray text-sm">SoloGold Balance</p>
                  <h3 className="text-2xl font-semibold font-mono">2,548.25</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-solo-purple bg-opacity-10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-solo-purple" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">+2.4%</span>
                <span className="text-solo-gray ml-2">from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-solo-gray text-sm">SoloID Status</p>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-solo-purple bg-opacity-10 flex items-center justify-center">
                  <Fingerprint className="h-6 w-6 text-solo-purple" />
                </div>
              </div>
              <div className="mt-4 text-xs flex items-center">
                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-solo-gray">Last verified: 3 days ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-solo-gray text-sm">Active Licenses</p>
                  <h3 className="text-2xl font-semibold font-mono">2</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-solo-purple bg-opacity-10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-solo-purple" />
                </div>
              </div>
              <div className="mt-4 text-xs flex items-center">
                <AlertCircle className="h-3 w-3 text-yellow-500 mr-1" />
                <span className="text-solo-gray">1 license expires in 30 days</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-solo-gray text-sm">Psychology Tier</p>
                  <h3 className="text-xl font-semibold">Sovereign</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-solo-purple bg-opacity-10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-solo-purple" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-solo-gray">Progress to next tier</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-1.5 bg-solo-gray-dark" indicatorClassName="bg-gradient-to-r from-solo-purple to-solo-blue" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modules section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/dashboard/soloid">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Fingerprint className="h-5 w-5 mr-2 text-solo-purple" />
                      SoloID Management
                    </CardTitle>
                    <CardDescription className="mt-1">Manage your digital identity</CardDescription>
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Identity Status</span>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Last Verification</span>
                    <span>Apr 12, 2025</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Verification Level</span>
                    <span>Level 3 (Enhanced)</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/sologold">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-solo-purple" />
                      SoloGold Vault
                    </CardTitle>
                    <CardDescription className="mt-1">Manage your digital assets</CardDescription>
                  </div>
                  <Badge className="bg-solo-purple">2,548.25 SG</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Token Value</span>
                    <span>$4,283.09 USD</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Gold Certificates</span>
                    <span>3 NFTs</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Last Transaction</span>
                    <span>2 days ago</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/trade-license">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-solo-purple" />
                      Trade Licenses
                    </CardTitle>
                    <CardDescription className="mt-1">Manage business permissions</CardDescription>
                  </div>
                  <Badge className="bg-solo-blue">2 Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Digital Commerce</span>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Crypto Trading</span>
                    <div className="flex items-center text-yellow-500">
                      <Clock className="h-3 w-3 mr-1" />
                      Renew Soon
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">New Applications</span>
                    <span>1 Pending</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/grants">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-solo-purple" />
                      Grant Applications
                    </CardTitle>
                    <CardDescription className="mt-1">Track funding opportunities</CardDescription>
                  </div>
                  <Badge className="bg-yellow-500">1 Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Tech Innovation Fund</span>
                    <div className="flex items-center text-yellow-500">
                      <Clock className="h-3 w-3 mr-1" />
                      Under Review
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Startup Grant</span>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Approved
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Available Grants</span>
                    <span>3 New Matches</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/psychology">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-solo-purple" />
                      Psychology Tier
                    </CardTitle>
                    <CardDescription className="mt-1">Behavior-based assessment</CardDescription>
                  </div>
                  <Badge>Sovereign</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Current Tier</span>
                    <span>Sovereign (Level 4)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Next Assessment</span>
                    <span>May 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Benefits Access</span>
                    <span>12 Unlocked</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dashboard/ai-agent">
            <Card className="glass-card h-full transition-all duration-300 hover:shadow-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Bot className="h-5 w-5 mr-2 text-solo-purple" />
                      AI Agent Portal
                    </CardTitle>
                    <CardDescription className="mt-1">Access AI tools and services</CardDescription>
                  </div>
                  <Badge className="bg-solo-blue">Premium</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">AI CFO Assistant</span>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Portfolio Analysis</span>
                    <div className="flex items-center text-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-solo-gray">Neural Credits</span>
                    <span>750 / 1000</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-solo-purple" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
