import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleLogin = async () => {
    try {
        console.log("login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-87.5 p-6 shadow-xl rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Email */}
          <Input placeholder="Email" className="mb-3" />

          {/* Password */}
          <Input type="password" placeholder="Password" className="mb-3" />

          <Button className="w-full mb-3">
            {isLogin ? "Login" : "Create Account"}
          </Button>

          {/* Google Button */}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </Button>

          <p className="text-sm text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              className="text-blue-500 cursor-pointer ml-1"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}