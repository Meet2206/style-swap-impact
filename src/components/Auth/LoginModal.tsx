import { useState } from "react";
import { X, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: { username: string; avatar: number }) => void;
}

const avatarOptions = [
  { id: 1, emoji: "👤", name: "Default" },
  { id: 2, emoji: "🌱", name: "Eco Warrior" },
  { id: 3, emoji: "♻️", name: "Recycler" },
  { id: 4, emoji: "🍃", name: "Green Thumb" },
  { id: 5, emoji: "🌍", name: "Earth Lover" },
];

export const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    });
    setSelectedAvatar(1);
    setShowPassword(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      const user: { username: string; avatar: number } = {
        username: formData.username || formData.email.split("@")[0],
        avatar: selectedAvatar,
      };
      onLogin(user);
      onClose();
    }
  };

  const handleSignup = () => {
    if (
      formData.email &&
      formData.password &&
      formData.username &&
      formData.password === formData.confirmPassword
    ) {
      const user: { username: string; avatar: number } = {
        username: formData.username,
        avatar: selectedAvatar,
      };
      onLogin(user);
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-poppins bg-gradient-eco bg-clip-text text-transparent">
            Welcome to ReWear
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <Button onClick={handleLogin} className="btn-eco w-full">
                Login
              </Button>
            </div>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Choose your avatar
                </label>
                <div className="flex justify-center space-x-2">
                  {avatarOptions.map((avatar) => (
                    <button
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar.id)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg transition-all duration-300 ${
                        selectedAvatar === avatar.id
                          ? "border-primary bg-primary/10 scale-110"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {avatar.emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Username"
                  className="pl-10"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="pl-10"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>

              <Button onClick={handleSignup} className="btn-eco w-full">
                Create Account
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-muted-foreground mt-4">
          By continuing, you agree to ReWear's sustainable fashion mission.
        </div>
      </DialogContent>
    </Dialog>
  );
};
