import { useState } from "react";
import { STAFF_GROUP_PHOTOS } from "../data/teamContent";
import toast from "react-hot-toast";

export default function StaffPhotosEditor() {
  const [localPhotos, setLocalPhotos] = useState(() =>
    JSON.parse(localStorage.getItem("STAFF_GROUP_PHOTOS")) || STAFF_GROUP_PHOTOS
  );

  const handleFile = (index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const next = [...localPhotos];
      next[index] = reader.result;
      setLocalPhotos(next);
    };
    reader.readAsDataURL(file);
  };

  const save = () => {
    localStorage.setItem("STAFF_GROUP_PHOTOS", JSON.stringify(localPhotos));
    toast.success("Staff group photos saved locally.");
  };

  const reset = () => {
    localStorage.removeItem("STAFF_GROUP_PHOTOS");
    setLocalPhotos(STAFF_GROUP_PHOTOS);
    toast.success("Staff group photos reset to defaults.");
  };

  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-4">Staff Group Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {localPhotos.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border p-1">
            <img src={src} alt={`Staff group ${i + 1}`} className="w-full h-28 object-cover" />
            <p className="text-xs mt-1 text-center text-[#8A7A85]">Slot {i + 1}</p>
            <div className="mt-2 px-2">
              <input type="file" accept="image/*" onChange={(e) => handleFile(i, e.target.files?.[0])} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={save} className="px-3 py-2 rounded bg-[#3B1130] text-white">Save</button>
        <button onClick={reset} className="px-3 py-2 rounded border">Reset</button>
      </div>
    </div>
  );
}
