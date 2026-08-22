// Placeholder photos are labeled with exactly what they should show, so
// it's obvious which real photo replaces which placeholder. Replace the
// `photo` URLs (and the bracketed names/roles) once real photos and
// details are ready — nothing here is real data yet.

const CEO_PHOTO = "/src/assets/ceoone.jpeg";
const STAFF_PHOTO =
  "https://placehold.co/400x500/3B1130/F6EFE7?text=Staff+Photo&font=raleway";

export const CEO = {
  name: "[CEO Name]",
  role: "Chief Executive Officer",
  bio: "Leads Flawless Consulting Firm Ltd's mission to deliver flawless British-English communication training across Africa.",
  photo: CEO_PHOTO,
};

// Add or remove staff members here — each just needs a name, role, and
// photo. Duplicate one of these objects for every real team member.
export const STAFF = [
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO },
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO },
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO },
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO },
];

// Five slots for staff group photos (use absolute paths pointing into /src/assets)
export const STAFF_GROUP_PHOTOS = [
  "/src/assets/grouppicture.jpeg",
  "/src/assets/grouppictures2.jpeg",
  "/src/assets/grouppictures5.jpeg",
  "/src/assets/grouppictures6.jpeg",
  "/src/assets/grouppictures3.jpeg",
];