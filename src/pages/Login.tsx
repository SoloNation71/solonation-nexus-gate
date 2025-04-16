
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Fingerprint, Camera, Upload, ShieldCheck, LogIn } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loginMethod, setLoginMethod] = useState<string>("credentials");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to Solo Nation.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-solo-purple opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-solo-blue opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-solo-purple to-solo-blue bg-clip-text text-transparent animate-gradient">
            Solo Nation
          </h1>
          <p className="text-solo-gray mt-2">Secure access to your digital sovereignty</p>
        </div>
        
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Member Portal</CardTitle>
            <CardDescription className="text-center">
              Access your Solo Nation digital identity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="credentials" onValueChange={setLoginMethod}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="credentials">
                  <LogIn className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Credentials</span>
                </TabsTrigger>
                <TabsTrigger value="soloId">
                  <Fingerprint className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">SoloID</span>
                </TabsTrigger>
                <TabsTrigger value="mfa">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">MFA</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="credentials">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Input 
                        type="text" 
                        placeholder="Member ID" 
                        className="bg-solo-gray-dark bg-opacity-30 border-solo-purple border-opacity-30 focus:border-solo-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        type="password" 
                        placeholder="Secure Passphrase" 
                        className="bg-solo-gray-dark bg-opacity-30 border-solo-purple border-opacity-30 focus:border-solo-purple" 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-solo-purple to-solo-blue hover:opacity-90 transition-opacity"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent rounded-full"></div>
                          Authenticating...
                        </div>
                      ) : "Access Portal"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="soloId">
                <div className="space-y-4">
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
                  <div className="relative border-2 border-dashed border-solo-purple border-opacity-30 rounded-lg p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Fingerprint className="h-12 w-12 mx-auto text-solo-purple opacity-50" />
                      <p className="mt-2 text-sm text-solo-gray">Select a SoloID verification method</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="mfa">
                <div className="space-y-4">
                  <div className="text-center">
                    <ShieldCheck className="h-12 w-12 mx-auto text-solo-purple" />
                    <h3 className="mt-2 text-lg font-medium">Multi-Factor Authentication</h3>
                    <p className="text-sm text-solo-gray mt-1">Required for high-value transactions above $10,000</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <Input 
                          key={i}
                          className="w-10 h-12 text-center"
                          maxLength={1}
                        />
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-solo-purple to-solo-blue hover:opacity-90 transition-opacity"
                  >
                    Verify
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center w-full text-xs text-solo-gray">
              <a href="#" className="text-solo-purple hover:text-solo-purple-light hover:underline transition-colors">Forgot access credentials?</a>
              <span className="mx-2">•</span>
              <a href="#" className="text-solo-purple hover:text-solo-purple-light hover:underline transition-colors">Need assistance?</a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
