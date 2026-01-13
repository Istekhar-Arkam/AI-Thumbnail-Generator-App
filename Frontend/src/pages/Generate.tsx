import { useState } from "react";
import { useParams } from "react-router-dom";
import { IThumbnail } from "../assets/assets";
import SoftBackdrop from "../components/SoftBackdrop";

const Generate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading,setLoading]=useState()
  return (
    <>
    <SoftBackdrop/>
    <div className="pt-24 min-h-screen">
      <main>

      </main>
    </div>
    </>
  )
};

export default Generate;
