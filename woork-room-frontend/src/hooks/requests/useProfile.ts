// hooks/useProfile.ts
import { useEffect, useState } from "react";
import axios from "axios";

export interface Profile {
  name: string;
  position: string;
  company: string;
  location: string;
  birthday: string;
  email: string;
  phone: string;
  skype: string;
  avatar?: string;
}

const useProfile = () => {
  const [data, setData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/me")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message || "Error fetching profile");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useProfile;
