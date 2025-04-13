
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileCad() {
    const { user } = useAuth();
    console.log(user);
  return (
    <motion.div
      className=" flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-6 bg-white">
        <CardContent className="flex flex-col items-center">
          <User className="w-16 h-16 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold text-purple-700 mb-2">{user?.name}</h2>
          <p className="text-gray-500 mb-4">{user?.email}</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
